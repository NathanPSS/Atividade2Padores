import { Module } from "@nestjs/common";
import { HashModule } from './hash/hash.module';
import { JwtAuthModule } from './jwt-auth/jwt-auth.module';
import { AuthSignupService } from './auth-signup/auth-signup.service';
import { AuthSigninService } from './auth-signin/auth-signin.service';
import { SigninController } from "./controllers/auth.signin.controller";
import { SignupController } from "./controllers/auth.signup.controller";
import { GuardModule } from './guard/guard.module';
import { TemplateRenderSignin } from "./controllers/template/auth.signin.template.controller";
import { TemplateRenderSignup } from "./controllers/template/auth.signup.template.controller";




@Module({
    controllers: [SigninController,SignupController,TemplateRenderSignin,TemplateRenderSignup],
    providers: [AuthSignupService, AuthSigninService],
    imports: [HashModule,JwtAuthModule, GuardModule],
})

export class AuthModule {}