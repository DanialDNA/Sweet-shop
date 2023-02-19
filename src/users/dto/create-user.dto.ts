import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { errorList } from 'src/errorList';
import { IsPasswordValid } from './password.validator';


export class CreateUserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(11, errorList.wrongUsernameFormat)
    @MaxLength(11, errorList.wrongUsernameFormat)
    username: string


    @ApiProperty()
    @IsPasswordValid()
    @IsString()
    @IsNotEmpty()
    // @MinLength(8, errorList.minPasswordLength)
    password: string


    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email: string

}


