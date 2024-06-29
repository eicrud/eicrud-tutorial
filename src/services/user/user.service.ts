import { CrudUserService } from '@eicrud/core/config'
import { ModuleRef } from "@nestjs/core";
import { User } from "./user.entity";
import { Injectable } from "@nestjs/common";
import { getSecurity } from "./user.security";
import { CrudService, Inheritance, CrudContext } from "@eicrud/core/crud";
import { serviceCmds } from "./cmds";
import { hooks } from "./user.hooks";

@Injectable()
export class UserService extends CrudUserService<User> {
    constructor(protected moduleRef: ModuleRef) {
        const serviceName = CrudService.getName(User);
        super(moduleRef, User, getSecurity(serviceName), { hooks });
    }
    
    // GENERATED START - do not remove

}