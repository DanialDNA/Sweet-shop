import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';


// interface sellerInterface {
//     connect: { id: number }
// }


class connectSubDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    id: number

}

class sellerSubDto {
    @ApiProperty({ type: connectSubDto})
    @IsObject()
    @IsNotEmpty()
    connect: connectSubDto
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

    @ApiProperty({ type: sellerSubDto})
    @IsObject()
    @IsNotEmpty()
    seller: sellerSubDto
}
