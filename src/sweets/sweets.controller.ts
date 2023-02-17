import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SweetsService } from './sweets.service';
import { CreateSweetDto } from './dto/create-sweet.dto';
import { UpdateSweetDto } from './dto/update-sweet.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { SweetEntity } from './entities/sweet.entity';

@Controller('sweets')
@ApiTags('sweets')
export class SweetsController {
  constructor(private readonly sweetsService: SweetsService) {}

  @Post()
  @ApiCreatedResponse({ type: SweetEntity })
  create(@Body() createSweetDto: CreateSweetDto) {
    return this.sweetsService.create(createSweetDto);
  }

  @Get()
  @ApiOkResponse({ type: SweetEntity, isArray: true })
  findAll() {
    return this.sweetsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: SweetEntity})
  findOne(@Param('id') id: string) {
    return this.sweetsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: SweetEntity})
  update(@Param('id') id: string, @Body() updateSweetDto: UpdateSweetDto) {
    return this.sweetsService.update(+id, updateSweetDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: SweetEntity})
  remove(@Param('id') id: string) {
    return this.sweetsService.remove(+id);
  }
}
