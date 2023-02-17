import { Module } from '@nestjs/common';
import { SweetsService } from './sweets.service';
import { SweetsController } from './sweets.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SweetsController],
  providers: [SweetsService],
  imports: [PrismaModule]
})
export class SweetsModule {}
