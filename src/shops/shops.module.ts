import { Module } from '@nestjs/common';
import { ShopsService } from './shops.service';
import { ShopsController } from './shops.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ShopsController],
  providers: [ShopsService],
  imports: [PrismaModule]
})
export class ShopsModule {}
