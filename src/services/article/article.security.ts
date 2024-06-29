import { CrudSecurity } from "@eicrud/core/config";
import { serviceCmds } from "./cmds";

export function getSecurity(article: string): CrudSecurity { 
    return {
        rolesRights: {
guest: {
    async defineCRUDAbility(can, cannot, ctx) {
        // guests can read all articles
        can('read', article)
    }
},
user: {
    async defineCRUDAbility(can, cannot, ctx) {
        // user can manage their own articles
        can('crud', article, {author: ctx.userId})
    }

}
        },

        cmdSecurityMap: Object.keys(serviceCmds).reduce((acc, cmd) => {
            acc[cmd] = serviceCmds[cmd].getCmdSecurity(cmd, article); return acc;
        }, {})
    }
}