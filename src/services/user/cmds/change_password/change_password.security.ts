import { CmdSecurity, baseCmds } from "@eicrud/core/config";


const getCmdSecurity = (change_password, user): CmdSecurity => { 
    return {
        minTimeBetweenCmdCallMs: 1000,
        dto: baseCmds.changePassword.dto,
        rolesRights: {
            user: {
                async defineCMDAbility(can, cannot, ctx) {
                    // Define abilities for user

                }
            }
        },
    }
}

export const changePasswordSecurity = {
    getCmdSecurity,
}