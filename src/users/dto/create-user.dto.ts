import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { errorList } from 'src/errorList';
import { IsPasswordValid } from './password.validator';


export class CreateUserDto {
    @ApiProperty()
    @Matches(RegExp("^09[0|1|2|3][0-9]{8}$"), errorList.wrongUsernameFormat)
    username: string


    @ApiProperty()
    @IsPasswordValid()
    @IsString()
    password: string


    @ApiProperty()
    @IsEmail({}, errorList.wrongEmail)
    email: string

}


