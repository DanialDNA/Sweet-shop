import { ApiProperty } from "@nestjs/swagger";
import { Order } from "@prisma/client";

export class OrderEntity implements Order {
    @ApiProperty()
    id: number
    
    @ApiProperty()
    totalPrice: number
    
    @ApiProperty()
    status: string
    
    @ApiProperty()
    weight: number
    
    @ApiProperty()
    sweetId: number
    
    @ApiProperty()
    userId: number
    
    @ApiProperty()
    shopId: number
    
    @ApiProperty()
    createdAt: Date
    
    @ApiProperty()
    updatedAt: Date
}
