import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

class connectSubDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    id: number
}

class relationFieldsSubDto {
    @ApiProperty({ type: connectSubDto})
    @IsObject()
    @IsNotEmpty()
    connect: connectSubDto
}


export class CreateOrderDto {  
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    totalPrice: number
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    status: string
    
    
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    weight: number
    
    @ApiProperty({type: relationFieldsSubDto})
    @IsNumber()
    @IsNotEmpty()
    sweet: relationFieldsSubDto
    
    @ApiProperty({type: relationFieldsSubDto})
    @IsNumber()
    @IsNotEmpty()
    user: relationFieldsSubDto
    
    @ApiProperty({type: relationFieldsSubDto})
    @IsNumber()
    @IsNotEmpty()
    shop: relationFieldsSubDto

}
