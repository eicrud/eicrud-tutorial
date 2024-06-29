import { CmdSecurity, baseCmds } from "@eicrud/core/config";


const getCmdSecurity = (logout, user): CmdSecurity => { 
    return {
        minTimeBetweenCmdCallMs: 1000,
        dto: baseCmds.logout.dto,
        rolesRights: {
            user: {
                async defineCMDAbility(can, cannot, ctx) {
                    // Define abilities for user

                }
            }
        },
    }
}

export const logoutSecurity = {
    getCmdSecurity,
}