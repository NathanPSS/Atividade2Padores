import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/client/prisma/prisma.module';
import { CachePedidosModule } from './cache-pedidos/cache-pedidos.module';
import { SavePedidosService } from './save-pedidos/save-pedidos.service';

@Module({
    imports: [CachePedidosModule,PrismaModule],
    providers: [SavePedidosService],
    exports: [SavePedidosService]
})
export class PedidosModule {}
