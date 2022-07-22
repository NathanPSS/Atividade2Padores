import { IsNotEmpty, IsString } from "class-validator";
import { UserDTO } from "./user.auth.dto";


export class AuthDTO extends UserDTO{

    @IsString()
    @IsNotEmpty()
    name: string;
}