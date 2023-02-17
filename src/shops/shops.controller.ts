import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShopsService } from './shops.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ShopEntity } from './entities/shop.entity';

@Controller('shops')
@ApiTags("shops")
export class ShopsController {
    constructor(private readonly shopsService: ShopsService) { }


    @Post()
    @ApiCreatedResponse({ type: ShopEntity })
    create(@Body() createShopDto: CreateShopDto) {
        return this.shopsService.create(createShopDto);
    }


    @Get()
    @ApiOkResponse({ type: ShopEntity, isArray: true })
    findAll() {
        return this.shopsService.findAll();
    }

    @Get(':id')
    @ApiOkResponse({ type: ShopEntity })
    findOne(@Param('id') id: string) {
        return this.shopsService.findOne(+id);
    }

    @Patch(':id')
    @ApiOkResponse({ type: ShopEntity })

    update(@Param('id') id: string, @Body() updateShopDto: UpdateShopDto) {
        return this.shopsService.update(+id, updateShopDto);
    }

    @Delete(':id')
    @ApiOkResponse({ type: ShopEntity })

    remove(@Param('id') id: string) {
        return this.shopsService.remove(+id);
    }
}
