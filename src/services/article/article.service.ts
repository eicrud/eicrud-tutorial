import { ModuleRef } from "@nestjs/core";
import { Article } from "./article.entity";
import { Injectable } from "@nestjs/common";
import { getSecurity } from "./article.security";
import { CrudService, Inheritance, CrudContext } from "@eicrud/core/crud";
import { serviceCmds } from "./cmds";
import { hooks } from "./article.hooks";

@Injectable()
export class ArticleService extends CrudService<Article> {
    constructor(protected moduleRef: ModuleRef) {
        const serviceName = CrudService.getName(Article);
        super(moduleRef, Article, getSecurity(serviceName), { hooks });
    }
    
    // GENERATED START - do not remove

}