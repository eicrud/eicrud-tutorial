import { CmdSecurity, baseCmds } from "@eicrud/core/config";


const getCmdSecurity = (reset_password, user): CmdSecurity => { 
    return {
        minTimeBetweenCmdCallMs: 1000,
        dto: baseCmds.resetPassword.dto,
        rolesRights: {
            user: {
                async defineCMDAbility(can, cannot, ctx) {
                    // Define abilities for user

                }
            }
        },
    }
}

export const resetPasswordSecurity = {
    getCmdSecurity,
}