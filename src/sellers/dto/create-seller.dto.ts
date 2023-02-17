import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';


enum genderType {
    male = "male",
    female = "female"
}

export class CreateSellerDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    username: string
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    password: string
    
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    nationalCode: string
    
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    firstName: string | null
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    lastName: string | null
    
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    birthday: Date
    
    @ApiProperty()
    @IsEnum(genderType)
    @IsNotEmpty()
    gender: genderType

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    province: string
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    city: string
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    homeAddress: string
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    sheba: string
}
