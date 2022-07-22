import { Controller,Get, Res } from "@nestjs/common";
import { Response } from "express";

@Controller('auth')
export class TemplateRenderSignup {
 
 @Get('signup')
 public templateRender(@Res() res:Response) {
    res.render('cadastro')
 }
}