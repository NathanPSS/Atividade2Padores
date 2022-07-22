import { Body, Controller ,Post, Res } from "@nestjs/common";
import { Response } from "express";
import { CachePedidoDTO } from "../dto";
import { CachePedidosService } from "./cache-pedidos.service";
import { ChecksCacheService } from "./checks-cache/checks-cache.service";

@Controller('users')
export class UserProdutosCacheController {
    constructor(
        private cache :CachePedidosService,
        private checksCache :ChecksCacheService
    ){}
    @Post('cache')
    public async caching(@Body() dto:CachePedidoDTO,@Res() res:Response) {
        const key = parseInt(dto.userId)
        delete dto.userId
        await this.cache.setCache(dto,key)
        return res.render('pedidos',{
            id: key,
            produto: (await this.checksCache.checksCache(key))
        })
    }
}