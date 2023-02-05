import { Module } from '@nestjs/common';
import { SweetsService } from './sweets.service';
import { SweetsController } from './sweets.controller';

@Module({
  controllers: [SweetsController],
  providers: [SweetsService]
})
export class SweetsModule {}
