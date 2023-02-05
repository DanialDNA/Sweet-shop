import { Sweet } from '@prisma/client';

import { ApiProperty } from '@nestjs/swagger';


enum sweetType {
    cake = "cake",
    dry = "dry",
    creamy = "creamy"
}

export class SweetEntity implements Sweet {
    @ApiProperty()
    id: number;
    
    @ApiProperty()
    type: sweetType

    @ApiProperty()
    pricePerKilo: number
    
    @ApiProperty()
    image: string
    
    @ApiProperty()
    description: string
    
    @ApiProperty()
    title: string
    
    @ApiProperty()
    stock: number
    
    @ApiProperty()
    shopId: number
    
    @ApiProperty()
    createdAt: Date
    
    @ApiProperty()
    updatedAt: Date

}

