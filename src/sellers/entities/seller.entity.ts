import { Seller } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

enum genderType {
    male = "male",
    female = "female"
}


export class SellerEntity implements Seller {
    @ApiProperty()
    id: number

    @ApiProperty()
    username: string

    @ApiProperty()
    password: string

    @ApiProperty() email: string
    nationalCode: string

    @ApiProperty()
    firstName: string | null

    @ApiProperty()
    lastName: string | null

    @ApiProperty()
    birthday: Date

    @ApiProperty()
    gender: genderType

    @ApiProperty()
    province: string

    @ApiProperty()
    city: string

    @ApiProperty()
    homeAddress: string

    @ApiProperty()
    sheba: string

    @ApiProperty()
    createdAt: Date

    @ApiProperty()
    updatedAt: Date



}
