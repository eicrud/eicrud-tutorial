import { CmdSecurity, baseCmds } from "@eicrud/core/config";


const getCmdSecurity = (timeout_user, user): CmdSecurity => { 
    return {
        minTimeBetweenCmdCallMs: 1000,
        dto: baseCmds.timeoutUser.dto,
        rolesRights: {
            user: {
                async defineCMDAbility(can, cannot, ctx) {
                    // Define abilities for user

                }
            }
        },
    }
}

export const timeoutUserSecurity = {
    getCmdSecurity,
}