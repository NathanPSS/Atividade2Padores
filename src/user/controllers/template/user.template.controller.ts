import { Controller,Get,Req,Res,UseGuards } from "@nestjs/common";
import { Request, Response } from "express";





@Controller('users')
export class UserReadCOntroller {
constructor(){}
 @Get('')
 public templateUser(@Res() res:Response,@Req() req:Request) {
    return res.render('pedidos',{
      id: `${req.query.id}`,
    })
 }

}