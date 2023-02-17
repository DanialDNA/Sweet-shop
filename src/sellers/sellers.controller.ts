import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SellersService } from './sellers.service';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { SellerEntity } from './entities/seller.entity';

@Controller('sellers')
@ApiTags("sellers")
export class SellersController {
    constructor(private readonly sellersService: SellersService) { }

    @Post()
    @ApiCreatedResponse({ type: SellerEntity })
    create(@Body() createSellerDto: CreateSellerDto) {
        return this.sellersService.create(createSellerDto);
    }

    @Get()
    @ApiOkResponse({ type: SellerEntity, isArray: true })
    findAll() {
        return this.sellersService.findAll();
    }

    @Get(':id')
    @ApiOkResponse({ type: SellerEntity })
    findOne(@Param('id') id: string) {
        return this.sellersService.findOne(+id);
    }

    @Patch(':id')
    @ApiOkResponse({ type: SellerEntity })
    update(@Param('id') id: string, @Body() updateSellerDto: UpdateSellerDto) {
        return this.sellersService.update(+id, updateSellerDto);
    }

    @Delete(':id')
    @ApiOkResponse({ type: SellerEntity })
    remove(@Param('id') id: string) {
        return this.sellersService.remove(+id);
    }
}
