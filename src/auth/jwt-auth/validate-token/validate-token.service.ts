import { Injectable } from '@nestjs/common';
import { PrismaPostGresService } from 'src/client/prisma/client-postgree/prisma.postgree.service';


@Injectable()
export class ValidateTokenService{
    constructor(
        private clientPrisma: PrismaPostGresService
    ){}
    public async validate(payload :{sub :number,email :string}) {
        const user = await this.clientPrisma.user.findUnique({
            where:{
                id: payload.sub
            }
        })
        delete user.senha
        return user
    }
}
