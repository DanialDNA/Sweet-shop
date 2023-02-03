import { User } from '@prisma/client';

import { ApiProperty } from '@nestjs/swagger';


export class UserEntity implements User {

    @ApiProperty()
    id: number;

    @ApiProperty()
    username: string

    @ApiProperty()
    password: string

    @ApiProperty()
    email: string

    @ApiProperty({ required: false, nullable: true })
    firstname: string | null

    @ApiProperty({ required: false, nullable: true })
    lasname: string | null

    @ApiProperty()
    createdAt: Date

    @ApiProperty()
    updatedAt: Date

}