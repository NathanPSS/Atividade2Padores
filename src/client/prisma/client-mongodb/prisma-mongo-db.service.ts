import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaMongoDbService extends PrismaClient{
    constructor( config :ConfigService){
        super({
            datasources:{
                db: {
                    url: config.get('MONGO'),
                }
            }
        }
        )
    }
}
