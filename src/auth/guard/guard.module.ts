import { Module } from '@nestjs/common';
import { JwtGuard } from './jwt.guard';

@Module({
  exports: [JwtGuard],
  providers: [JwtGuard],
})
export class GuardModule {}
