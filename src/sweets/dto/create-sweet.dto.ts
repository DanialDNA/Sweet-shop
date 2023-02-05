import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength, IsNumber } from 'class-validator';


enum sweetType {
    cake = "cake",
    dry = "dry",
    creamy = "creamy"
}


export class CreateSweetDto {

    @IsNotEmpty()
    @IsEnum(sweetType)
    @ApiProperty()
    type: string

    @IsNotEmpty()
    @ApiProperty()
    @IsNumber()
    pricePerKilo: number

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    description: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    title: string

    @IsNotEmpty()
    @ApiProperty()
    @IsNumber()
    stock: number

    @IsNotEmpty()
    @ApiProperty()
    @IsNumber()
    shopId: number

}
