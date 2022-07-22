import { IsArray, IsNotEmpty, IsNumber } from "class-validator";
import { ProdutoDTO } from "./ProdutoDTO";

export class PedidoDTO{
    @IsNotEmpty()
    @IsNumber()
    userId :number
    
    @IsArray()
    @IsNotEmpty()
    produtos :Array<ProdutoDTO>
}
