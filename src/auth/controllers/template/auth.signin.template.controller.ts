import { Controller,Get, Res } from "@nestjs/common";
import { Response } from "express";


@Controller('auth')
export class TemplateRenderSignin {
 @Get('signin')
 public templateRender(@Res() res:Response) {
    res.render('loginCliente')
 }
}