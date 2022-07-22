import { CACHE_MANAGER, Inject, Injectable} from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class ChecksCacheService {
    constructor(@Inject(CACHE_MANAGER) private readonly cacheManager:Cache){
    }
    public async checksCache(key) {
        const cachedItem:Array<Object> = await this.cacheManager.get(key)
        return cachedItem
    }
}
