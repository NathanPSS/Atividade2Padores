import { Injectable } from '@nestjs/common';
import { PrismaPostGresService } from 'src/client/prisma/client-postgree/prisma.postgree.service';

@Injectable()
export class SavePedidosService {
    constructor(
        private client :PrismaPostGresService
    ){}
    public async savePedidos(pedido) {
        console.log(pedido.produtos)
        await this.client.pedido.create({
            data:{
             produtos:{
                create: pedido.produtos
             },
             userId: pedido.userId
            }
        }).catch(error =>{console.log(error)});
    }
}
