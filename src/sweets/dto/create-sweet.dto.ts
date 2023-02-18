import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength, IsNumber, IsObject } from 'class-validator';


enum sweetType {
    cake = "cake",
    dry = "dry",
    creamy = "creamy"
}

// interface shopInterface {
//     connect: {id:number}
// }

class connectSubDtop {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    id: number

}


class shopSubDtop {
    @ApiProperty({ type: connectSubDtop})
    @IsObject()
    @IsNotEmpty()
    connect: connectSubDtop

}


export class CreateSweetDto {

    @IsNotEmpty()
    @IsEnum(sweetType)
    @ApiProperty({enum: sweetType})
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
    shop: shopSubDtop

}
