import { CrudContext, CrudHooks } from "@eicrud/core/crud";
import { Article } from "./article.entity";
import { ArticleService } from "./article.service";
import { FindResponseDto } from "@eicrud/shared/interfaces";

export class ArticleHooks extends CrudHooks<Article> {

    override async beforeCreateHook(this: ArticleService, data: Partial<Article>[], ctx: CrudContext): Promise<Partial<Article>[]> {
        // before Article creation

        return data;
    }

    override async afterCreateHook(this: ArticleService, result: any[], data: Partial<Article>[], ctx: CrudContext): Promise<Article[]>  {
        // after Article creation

        return result;
    }

    override async beforeReadHook(this: ArticleService, query: Partial<Article>, ctx: CrudContext): Promise<Partial<Article>> {
        // before Article read

        return query;
    }

    override async afterReadHook(this: ArticleService, result, query: Partial<Article>, ctx: CrudContext): Promise<FindResponseDto<Article>> {
        // after Article read

        return result;
    }

    override async beforeUpdateHook(this: ArticleService, 
        updates: { query: Partial<Article>; data: Partial<Article> }[],
        ctx: CrudContext,
    ): Promise<{ query: Partial<Article>; data: Partial<Article> }[]>  {
        // before Article update

        return updates;
    }

    override async afterUpdateHook(this: ArticleService, 
        results: any[],
        updates: { query: Partial<Article>; data: Partial<Article> }[],
        ctx: CrudContext,
    ): Promise<any[]> {
        // after Article update

        return results;
    }

    override async beforeDeleteHook(this: ArticleService, query: Partial<Article>, ctx: CrudContext): Promise<Partial<Article>> {
        // before Article delete

        return query;
    }

    override async afterDeleteHook(this: ArticleService, result: any, query: Partial<Article>, ctx: CrudContext): Promise<number> {
        // after Article delete

        return result;
    }

    override async errorControllerHook(this: ArticleService, error: any, ctx: CrudContext): Promise<any> {
        //after Article error

    }
};

export const hooks = new ArticleHooks();

