import { CmdSecurity, baseCmds } from "@eicrud/core/config";


const getCmdSecurity = (logout_everywhere, user): CmdSecurity => { 
    return {
        minTimeBetweenCmdCallMs: 1000,
        dto: baseCmds.logoutEverywhere.dto,
        rolesRights: {
            user: {
                async defineCMDAbility(can, cannot, ctx) {
                    // Define abilities for user

                }
            }
        },
    }
}

export const logoutEverywhereSecurity = {
    getCmdSecurity,
}