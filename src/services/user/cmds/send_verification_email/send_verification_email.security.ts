import { CmdSecurity, baseCmds } from "@eicrud/core/config";


const getCmdSecurity = (send_verification_email, user): CmdSecurity => { 
    return {
        minTimeBetweenCmdCallMs: 1000,
        dto: baseCmds.sendVerificationEmail.dto,
        rolesRights: {
            user: {
                async defineCMDAbility(can, cannot, ctx) {
                    // Define abilities for user

                }
            }
        },
    }
}

export const sendVerificationEmailSecurity = {
    getCmdSecurity,
}