import { Module,CacheModule } from '@nestjs/common';
import { CachePedidosService } from './cache-pedidos.service';
import { UserProdutosCacheController } from './user.produtos.controller';
import { ChecksCacheService } from './checks-cache/checks-cache.service';


@Module({
    imports: [CacheModule.register({
        ttl: 300
    })],
    providers: [CachePedidosService, ChecksCacheService],
    exports: [CachePedidosService,ChecksCacheService],
    controllers: [UserProdutosCacheController]
})
export class CachePedidosModule {
}
