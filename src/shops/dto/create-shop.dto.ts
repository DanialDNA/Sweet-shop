import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';


interface sellerInterface {
    connect: { id: number }
}

export class CreateShopDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    title: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    address: string

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    phone: number

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    seller: sellerInterface
}
