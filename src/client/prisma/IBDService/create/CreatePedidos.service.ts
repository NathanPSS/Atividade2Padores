import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaForbididdenService } from 'src/exceptions/prisma-forbididden/prisma-forbididden.service';
import { PedidoDTO } from 'src/pedidos/dto/PedidoDTO';



@Injectable()
export class CreatePedido {
    constructor(
    private checksForbidden :PrismaForbididdenService,
  ){}
  public async create(dto :PedidoDTO,BDService :PrismaClient) {
    try{
      const user = BDService.pedido.create({
        data:{
          produtos:{
            create: dto.produtos
          },
          userId: dto.userId
        }
      })
      return user
    }catch(error){
      return await this.checksForbidden.prismaForbidden('Email ou Senha Incorredos')
    }
  }
}