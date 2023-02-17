import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { SweetsModule } from './sweets/sweets.module';
import { ShopsModule } from './shops/shops.module';


@Module({
  imports: [
        UsersModule,
        ConfigModule.forRoot({ isGlobal: true }),
        PrismaModule,
        SweetsModule,
        ShopsModule
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
