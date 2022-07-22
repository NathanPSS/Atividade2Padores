import { Body, Controller, HttpCode, Post, Redirect, Res} from "@nestjs/common";
import { Socket } from "net";
import { response, Response, } from "express";
import { IncomingMessage, request, Server, ServerResponse } from "http";
import { AuthSigninService } from "../auth-signin/auth-signin.service";
import { UserDTO } from "../dto/user.auth.dto";
import { ExpressAdapter } from "@nestjs/platform-express";
import axios from "axios";




@Controller('auth')
export class SigninController {
    constructor(
        private signinService :AuthSigninService
    ){}
    @HttpCode(200)
    @Post('signin')
    public async singin(@Body() dto:UserDTO,@Res() res:Response){
    const id = await this.signinService.signin(dto)
    return res.redirect(`http://localhost:3333/users/?id=${id}`)
}
}