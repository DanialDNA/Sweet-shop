import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { errorList } from 'src/errorList';



export class UpdateUserDto {
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    firstname: string


    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    lastname: string


    @ApiProperty()
    @IsEmail({}, errorList.wrongEmail)
    email: string

}
