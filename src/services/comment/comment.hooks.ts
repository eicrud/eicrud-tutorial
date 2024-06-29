import { CrudContext, CrudHooks } from "@eicrud/core/crud";
import { Comment } from "./comment.entity";
import { CommentService } from "./comment.service";
import { FindResponseDto } from "@eicrud/shared/interfaces";

export class CommentHooks extends CrudHooks<Comment> {

    override async beforeCreateHook(this: CommentService, data: Partial<Comment>[], ctx: CrudContext): Promise<Partial<Comment>[]> {
        // before Comment creation

        return data;
    }

    override async afterCreateHook(this: CommentService, result: any[], data: Partial<Comment>[], ctx: CrudContext): Promise<Comment[]>  {
        // after Comment creation

        return result;
    }

    override async beforeReadHook(this: CommentService, query: Partial<Comment>, ctx: CrudContext): Promise<Partial<Comment>> {
        // before Comment read

        return query;
    }

    override async afterReadHook(this: CommentService, result, query: Partial<Comment>, ctx: CrudContext): Promise<FindResponseDto<Comment>> {
        // after Comment read

        return result;
    }

    override async beforeUpdateHook(this: CommentService, 
        updates: { query: Partial<Comment>; data: Partial<Comment> }[],
        ctx: CrudContext,
    ): Promise<{ query: Partial<Comment>; data: Partial<Comment> }[]>  {
        // before Comment update

        return updates;
    }

    override async afterUpdateHook(this: CommentService, 
        results: any[],
        updates: { query: Partial<Comment>; data: Partial<Comment> }[],
        ctx: CrudContext,
    ): Promise<any[]> {
        // after Comment update

        return results;
    }

    override async beforeDeleteHook(this: CommentService, query: Partial<Comment>, ctx: CrudContext): Promise<Partial<Comment>> {
        // before Comment delete

        return query;
    }

    override async afterDeleteHook(this: CommentService, result: any, query: Partial<Comment>, ctx: CrudContext): Promise<number> {
        // after Comment delete

        return result;
    }

    override async errorControllerHook(this: CommentService, error: any, ctx: CrudContext): Promise<any> {
        //after Comment error

    }
};

export const hooks = new CommentHooks();

