import { CACHE_MANAGER, Inject, Injectable} from '@nestjs/common';
import { Cache } from 'cache-manager';
import { ChecksCacheService } from './checks-cache/checks-cache.service';




@Injectable()
export class CachePedidosService {
constructor(@Inject(CACHE_MANAGER) 
private readonly cacheManager:Cache,
private checksCache :ChecksCacheService
){}

public async setCache(dto,key) {
    dto.id = parseInt(dto.id)
    dto.quantidade = parseInt(dto.quantidade)
    const dataCache :Array<Object>= await this.checksCache.checksCache(key)
    if (dataCache){
        dataCache.push(dto)
        await this.cacheManager.set(key,dataCache)
    }
    else{
        await this.cacheManager.set(key,[dto])
    }
}
}
