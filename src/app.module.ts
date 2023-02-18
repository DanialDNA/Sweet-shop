import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { SweetsModule } from './sweets/sweets.module';
import { ShopsModule } from './shops/shops.module';
import { SellersModule } from './sellers/sellers.module';
import { OrdersModule } from './orders/orders.module';


@Module({
  imports: [
        UsersModule,
        ConfigModule.forRoot({ isGlobal: true }),
        PrismaModule,
        SweetsModule,
        ShopsModule,
        SellersModule,
        OrdersModule
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
