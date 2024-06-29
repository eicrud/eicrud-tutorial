import { CmdSecurity, baseCmds } from "@eicrud/core/config";


const getCmdSecurity = (check_jwt, user): CmdSecurity => { 
    return {
        minTimeBetweenCmdCallMs: 1000,
        dto: baseCmds.checkJwt.dto,
        rolesRights: {
            user: {
                async defineCMDAbility(can, cannot, ctx) {
                    // Define abilities for user

                }
            }
        },
    }
}

export const checkJwtSecurity = {
    getCmdSecurity,
}