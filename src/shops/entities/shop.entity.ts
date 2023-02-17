import { ApiProperty } from "@nestjs/swagger";
import { Shop } from "@prisma/client";

export class ShopEntity implements Shop {
    @ApiProperty()
    id: number
  
    @ApiProperty()
    title: string
  
    @ApiProperty()
    address:  string
  
  
    @ApiProperty()
    phone: number
    
  
    @ApiProperty()
    sellerId: number


    @ApiProperty()
    createdAt: Date

    @ApiProperty()
    updatedAt: Date




}
