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