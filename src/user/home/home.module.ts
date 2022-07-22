import { Module } from '@nestjs/common';
import { HomeControllerController } from './home-controller/home-controller.controller';

@Module({
  controllers: [HomeControllerController]
})
export class HomeModule {}
