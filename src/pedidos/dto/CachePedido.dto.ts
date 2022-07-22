import { IsNotEmpty, IsString } from "class-validator";

export class CachePedidoDTO {
    @IsString()
    @IsNotEmpty()
    id: string

    @IsNotEmpty()
    quantidade: string
   
    @IsString()
    @IsNotEmpty()
    userId: string
}