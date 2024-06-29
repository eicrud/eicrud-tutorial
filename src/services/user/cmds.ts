import { logoutSecurity } from './cmds/logout/logout.security';
import { timeoutUserSecurity } from './cmds/timeout_user/timeout_user.security';
import { checkJwtSecurity } from './cmds/check_jwt/check_jwt.security';
import { loginSecurity } from './cmds/login/login.security';
import { logoutEverywhereSecurity } from './cmds/logout_everywhere/logout_everywhere.security';
import { createAccountSecurity } from './cmds/create_account/create_account.security';
import { resetPasswordSecurity } from './cmds/reset_password/reset_password.security';
import { changePasswordSecurity } from './cmds/change_password/change_password.security';
import { sendPasswordResetEmailSecurity } from './cmds/send_password_reset_email/send_password_reset_email.security';
import { verifyEmailSecurity } from './cmds/verify_email/verify_email.security';
import { sendVerificationEmailSecurity } from './cmds/send_verification_email/send_verification_email.security';

//Auto generated file

export const serviceCmds =  {
    logout: logoutSecurity,
    timeout_user: timeoutUserSecurity,
    check_jwt: checkJwtSecurity,
    login: loginSecurity,
    logout_everywhere: logoutEverywhereSecurity,
    create_account: createAccountSecurity,
    reset_password: resetPasswordSecurity,
    change_password: changePasswordSecurity,
    send_password_reset_email: sendPasswordResetEmailSecurity,
    verify_email: verifyEmailSecurity,
    send_verification_email: sendVerificationEmailSecurity,
}