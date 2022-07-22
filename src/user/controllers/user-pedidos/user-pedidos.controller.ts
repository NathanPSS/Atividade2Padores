import { Body, Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ChecksCacheService } from 'src/pedidos/cache-pedidos/checks-cache/checks-cache.service';
import { SavePedidosService } from 'src/pedidos/save-pedidos/save-pedidos.service';


@Controller('users')
export class UserPedidosController {
    constructor(
        private getCache :ChecksCacheService,
        private client: SavePedidosService
    ){}
    @Get('save-pedido')
    public async savePedido(@Req() req:Request,@Res() res:Response) {
        const id = parseInt(`${req.query.id}`)
        const dataCache :Array<Object>= await this.getCache.checksCache(id)
        const pedido = {
            userId: id,
            produtos: dataCache
        }
        await this.client.savePedidos(pedido)
        res.redirect('http://localhost:3333/home')
    }
}
