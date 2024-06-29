import { CmdSecurity, baseCmds } from "@eicrud/core/config";


const getCmdSecurity = (login, user): CmdSecurity => { 
    return {
        minTimeBetweenCmdCallMs: 1000,
        dto: baseCmds.login.dto,
        rolesRights: {
guest: {
    async defineCMDAbility(can, cannot, ctx) {
        // Define abilities for user
        can(login, user)
    }
}
        },
    }
}

export const loginSecurity = {
    getCmdSecurity,
}