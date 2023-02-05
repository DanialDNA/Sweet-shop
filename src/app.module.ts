import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { SweetsModule } from './sweets/sweets.module';


@Module({
  imports: [
        UsersModule,
        ConfigModule.forRoot({ isGlobal: true }),
        PrismaModule,
        SweetsModule
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
