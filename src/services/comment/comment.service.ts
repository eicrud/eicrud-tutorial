import { ModuleRef } from "@nestjs/core";
import { Comment } from "./comment.entity";
import { Injectable } from "@nestjs/common";
import { getSecurity } from "./comment.security";
import { CrudService, Inheritance, CrudContext } from "@eicrud/core/crud";
import { serviceCmds } from "./cmds";
import { hooks } from "./comment.hooks";

@Injectable()
export class CommentService extends CrudService<Comment> {
    constructor(protected moduleRef: ModuleRef) {
        const serviceName = CrudService.getName(Comment);
        super(moduleRef, Comment, getSecurity(serviceName), { hooks });
    }
    
    // GENERATED START - do not remove

}