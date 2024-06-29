import { CmdSecurity, baseCmds } from "@eicrud/core/config";


const getCmdSecurity = (verify_email, user): CmdSecurity => { 
    return {
        minTimeBetweenCmdCallMs: 1000,
        dto: baseCmds.verifyEmail.dto,
        rolesRights: {
            user: {
                async defineCMDAbility(can, cannot, ctx) {
                    // Define abilities for user

                }
            }
        },
    }
}

export const verifyEmailSecurity = {
    getCmdSecurity,
}