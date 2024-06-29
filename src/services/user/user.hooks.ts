import { CrudContext, CrudHooks } from "@eicrud/core/crud";
import { User } from "./user.entity";
import { UserService } from "./user.service";
import { FindResponseDto } from "@eicrud/shared/interfaces";

export class UserHooks extends CrudHooks<User> {

    override async beforeCreateHook(this: UserService, data: Partial<User>[], ctx: CrudContext): Promise<Partial<User>[]> {
        // before User creation

        return data;
    }

    override async afterCreateHook(this: UserService, result: any[], data: Partial<User>[], ctx: CrudContext): Promise<User[]>  {
        // after User creation

        return result;
    }

    override async beforeReadHook(this: UserService, query: Partial<User>, ctx: CrudContext): Promise<Partial<User>> {
        // before User read

        return query;
    }

    override async afterReadHook(this: UserService, result, query: Partial<User>, ctx: CrudContext): Promise<FindResponseDto<User>> {
        // after User read

        return result;
    }

    override async beforeUpdateHook(this: UserService, 
        updates: { query: Partial<User>; data: Partial<User> }[],
        ctx: CrudContext,
    ): Promise<{ query: Partial<User>; data: Partial<User> }[]>  {
        // before User update

        return updates;
    }

    override async afterUpdateHook(this: UserService, 
        results: any[],
        updates: { query: Partial<User>; data: Partial<User> }[],
        ctx: CrudContext,
    ): Promise<any[]> {
        // after User update

        return results;
    }

    override async beforeDeleteHook(this: UserService, query: Partial<User>, ctx: CrudContext): Promise<Partial<User>> {
        // before User delete

        return query;
    }

    override async afterDeleteHook(this: UserService, result: any, query: Partial<User>, ctx: CrudContext): Promise<number> {
        // after User delete

        return result;
    }

    override async errorControllerHook(this: UserService, error: any, ctx: CrudContext): Promise<any> {
        //after User error

    }
};

export const hooks = new UserHooks();

