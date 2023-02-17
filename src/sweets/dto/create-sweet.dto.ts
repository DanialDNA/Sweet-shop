import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength, IsNumber, IsObject } from 'class-validator';


enum sweetType {
    cake = "cake",
    dry = "dry",
    creamy = "creamy"
}

interface shopInterface {
    connect: {id:number}
}


export class CreateSweetDto {

    @IsNotEmpty()
    @IsEnum(sweetType)
    @ApiProperty()
    type: sweetType

    @IsNotEmpty()
    @ApiProperty()
    @IsNumber()
    pricePerKilo: number

    @IsNotEmpty()
    @ApiProperty()
    @IsString()
    image: string

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
    @IsObject()
    shop: shopInterface

}
