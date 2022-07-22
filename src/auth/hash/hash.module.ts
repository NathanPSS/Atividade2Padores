import { Module } from '@nestjs/common';
import { GenerateHashService } from './generate-hash/generate-hash.service';
import { ChecksHashService } from './checks-hash/checks-hash.service';

@Module({
  providers: [GenerateHashService, ChecksHashService],
  exports: [GenerateHashService, ChecksHashService]
})
export class HashModule {}
