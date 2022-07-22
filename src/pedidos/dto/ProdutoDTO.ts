import { IsNotEmpty, IsNumber } from "class-validator"

export class ProdutoDTO {
    @IsNotEmpty()
    @IsNumber()
    id :number
    
    @IsNotEmpty()
    @IsNumber()
    quantidade :number
}