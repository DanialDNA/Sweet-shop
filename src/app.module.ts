import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
        UsersModule,
        ConfigModule.forRoot({ isGlobal: true }),
        PrismaModule
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
