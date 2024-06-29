# Build your CRUD backend in 20min with Eicrud + MongoDB

In this tutorial, I'm going to demonstrate how [Eicrud](eicrud.com) can save you tons of time when building your Node.js backend.

We're going to make a simple blogging platform where users can read, publish and comment on articles. 

## Prerequisites

- [Node.js](https://nodejs.org/en/download/package-manager) >= v18
- [MongoDB](https://www.mongodb.com/docs/manual/installation/) listening on localhost:27017
- [ts-node](https://www.npmjs.com/package/ts-node) or your favorite frontend framework

---

## Installation

First, let's set up our app by following [Eicrud's documentation](https://docs.eicrud.com/installation/).

We create a new [NestJS](https://nestjs.com/) application.

```bash
 npm i -g @nestjs/cli
 nest new myblog
 cd myblog
```
Then install [Eicrud](eicrud.com) on top of it.
```bash
npm i -g @eicrud/cli
eicrud setup mongo myblog
```
Finally, we generate a secret key and store it in a `.env` file at the root of our project.

```bash
echo "JWT_SECRET=$(node -e "console.log(require('crypto').randomBytes(256).toString('base64'));")" > .env
```
Now we already have a well-structured project! You can check that everything is working.
```bash
npm run start
```

## Services

The [CLI](https://www.npmjs.com/package/@eicrud/cli) already generated a `User` service for us in `src\services\user`. All we need to add to our application is an `Article` service and a `Comment` service.


```bash
eicrud generate service Article
eicrud generate service Comment
```


## Model definition

Let's edit our entities to our liking.

Update the file `src\services\article\article.entity.ts` with the following.

```typescript
import { Entity, PrimaryKey, Property, 
    ManyToOne } from "@mikro-orm/core";
import { IsString, IsOptional } from "class-validator";
import { CrudEntity } from "@eicrud/core/crud";
import { User } from "../user/user.entity";
import { $MaxSize } from "@eicrud/core/validation";


@Entity()
export class Article implements CrudEntity {

    @PrimaryKey({ name: '_id' })
    @IsString()
    @IsOptional()
    id: string;

    @ManyToOne(() => User)
    @IsString()
    author: User | string;

    @Property()
    @IsString()
    title: string;

    @Property()
    @IsString()
    @$MaxSize(1000)
    content: string;

    @Property()
    createdAt: Date;

    @Property()
    updatedAt: Date;

}
```

And don't forget our `Comment` entity in `src\services\comment\comment.entity.ts`.

```typescript
import { Entity, PrimaryKey, Property, ManyToOne } from "@mikro-orm/core";
import { IsString, IsOptional } from "class-validator";
import { CrudEntity } from "@eicrud/core/crud";
import { Article } from "../article/article.entity";
import { User } from "../user/user.entity";
import { $MaxSize } from "@eicrud/core/validation";


@Entity()
export class Comment implements CrudEntity {

    @PrimaryKey({ name: '_id' })
    @IsString()
    @IsOptional()
    id: string;

    @ManyToOne(() => Article)
    @IsString()
    article: Article | string;

    @ManyToOne(() => User)
    @IsString()
    author: User | string;

    @Property()
    @IsString()
    @$MaxSize(200)
    content: string;

    @Property()
    createdAt: Date;

    @Property()
    updatedAt: Date;

}
```

## Access rules
Now that we have our model, let's update the access rules in `src\services\article\article.security.ts`. We want everyone to read our articles, but only their author should be able to modify them.

```typescript
guest: {
    async defineCRUDAbility(can, cannot, ctx) {
        // guests can read all articles
        can('read', article)
    }
},
user: {
    async defineCRUDAbility(can, cannot, ctx) {
        // user can manage their own articles
        can('crud', article, { author: ctx.userId })
    }
}
```
It's the same idea for comments, except this time we don't want users to modify their comments after creation. Let's change the rules in `src\services\comment\comment.security.ts`.

```typescript
guest: {
    async defineCRUDAbility(can, cannot, ctx) {
        // guests can read all comments
        can('read', comment)
    }
},
user: {
    async defineCRUDAbility(can, cannot, ctx) {
        // user create and delete their own comments
        can('cd', comment, {author: ctx.userId})
    }
}
```
## Commands
Eicrud has [prebuilt commands](https://docs.eicrud.com/user/service/#account-creation) for account creation and login. We just need to allow their usage in `src\services\user\cmds\create_account\create_account.security.ts`.

```typescript
guest: {
    async defineCMDAbility(can, cannot, ctx) {
        // can create an account with the role 'user'
        can(create_account, user, {role: 'user'})
    }
}
```

And in `src\services\user\cmds\login\login.security.ts`.
```typescript
guest: {
    async defineCMDAbility(can, cannot, ctx) {
        // Define abilities for user
        can(login, user)
    }
}
```
Now our backend is ready for action! Let's start the server and switch to another terminal.
```bash
npm run start
```

## Calling the API
To simulate our frontend we're going to use [ts-node](https://www.npmjs.com/package/ts-node), but you can use your favorite framework or tools like [esbuild](https://esbuild.github.io/) if you prefer.

```bash
npm i -g ts-node # make sur to install it globally
```

Let's install [Eicrud's client](https://docs.eicrud.com/client/setup).
```bash
npm i @eicrud/client
```
Create a file `front.ts` and start with a helper class to make Eicrud's client dynamic.

```typescript
import { ClientConfig, CrudClient } from "@eicrud/client";

export class DynamicClient {
    crudClient: CrudClient<any>;

    constructor() {
        const initalConfig: ClientConfig = {
            url: 'http://localhost:3000',
            serviceName: 'user',
        }
        this.crudClient = new CrudClient(initalConfig);
    }

    get(serviceName){
        this.crudClient.config.serviceName = serviceName;
        return this.crudClient;
    }
}
```
Now we can create our first account and publish an article.

```typescript
// ... following in front.ts

import { ICreateAccountDto } from '@eicrud/shared/interfaces';
import { ILoginDto } from '@eicrud/shared/interfaces';
import { Article } from "./src/services/article/article.entity";

async function main() {
    const client = new DynamicClient();

    // Create account and publish article
    const dto: ICreateAccountDto = {
        email: 'new.user@mail.com',
        password: 'p4ssw0rd',
        role: 'user',
    };
    const { userId } = await client.get('user').cmdS('create_account', dto);

    console.log('User created!', userId);

    const loginDto: ILoginDto = {
        email: 'new.user@mail.com',
        password: 'p4ssw0rd',
    };
    
    await client.get('user').login(loginDto);

    const newArticle: Partial<Article> = {
        title: 'New article',
        content: 'This is a new article',
        author: userId,
    };

    await client.get('article').create(newArticle);

    // Let's check that our article was created
    const userArticles = await client.get('article').find({ author: userId });
    console.log('User articles:', userArticles);
}

main();
```
And let's run our frontend to test our API.
```bash
ts-node front.ts
```
That's all for the basics! 

Take note of all the [CRUD operations](https://docs.eicrud.com/client/operations) available to the client. You can use any of them to query the `'article'` or `'comment'` service.

## Going further

Eicrud is in active development and has many features to make your life easier. You can learn all about it in the [documentation](https://docs.eicrud.com). If you find any issue don't hesitate to [create one](https://github.com/eicrud/eicrud/issues) and I'll look into it.

Happy coding!

---

Original article: https://dev.to/acrosett/build-your-crud-backend-in-20min-with-eicrud-mongodb-4n3p
