import { Body, Controller ,Post ,Res } from "@nestjs/common";
import { Response } from "express";
import { AuthSignupService } from "../auth-signup/auth-signup.service";
import { AuthDTO } from "../dto/signup.auth.dto";



@Controller('auth')
export class SignupController {
    constructor(
        private signinService :AuthSignupService
    ){}
    @Post('sign_up')
    public async singin(@Body() dto:AuthDTO,@Res() res:Response){
        const id = await this.signinService.signup(dto)
        return res.redirect(`http://localhost:3333/users/?id=${id}`)
    }
}