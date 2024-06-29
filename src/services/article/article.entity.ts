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