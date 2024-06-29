import { Entity, PrimaryKey, Property, 
    ManyToOne } from "@mikro-orm/core";
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