import { CmdSecurity, baseCmds } from "@eicrud/core/config";


const getCmdSecurity = (create_account, user): CmdSecurity => { 
    return {
        minTimeBetweenCmdCallMs: 1000,
        dto: baseCmds.createAccount.dto,
        rolesRights: {
guest: {
    async defineCMDAbility(can, cannot, ctx) {
        // can create an account with the role 'user'
        can(create_account, user, {role: 'user'})
    }
}
        },
    }
}

export const createAccountSecurity = {
    getCmdSecurity,
}