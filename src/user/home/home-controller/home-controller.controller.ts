import { Controller, Get, Res,} from '@nestjs/common';
import { Response } from 'express';

@Controller('home')
export class HomeControllerController {
    @Get('')
    public renderHome(@Res() res:Response) {
        res.render('home')
    }
}
