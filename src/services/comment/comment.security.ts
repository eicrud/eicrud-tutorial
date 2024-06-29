import { CrudSecurity } from "@eicrud/core/config";
import { serviceCmds } from "./cmds";

export function getSecurity(comment: string): CrudSecurity { 
    return {
        rolesRights: {
guest: {
    async defineCRUDAbility(can, cannot, ctx) {
        // guests can read all comments
        can('read', comment)
    }
},
user: {
    async defineCRUDAbility(can, cannot, ctx) {
        // user create and delete their own comments
        can('cd', comment, {author: ctx.userId})
    }
}
        },

        cmdSecurityMap: Object.keys(serviceCmds).reduce((acc, cmd) => {
            acc[cmd] = serviceCmds[cmd].getCmdSecurity(cmd, comment); return acc;
        }, {})
    }
}