import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SweetsService } from './sweets.service';
import { CreateSweetDto } from './dto/create-sweet.dto';
import { UpdateSweetDto } from './dto/update-sweet.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('sweets')
@ApiTags('sweets')
export class SweetsController {
  constructor(private readonly sweetsService: SweetsService) {}

  @Post()
  create(@Body() createSweetDto: CreateSweetDto) {
    return this.sweetsService.create(createSweetDto);
  }

  @Get()
  findAll() {
    return this.sweetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sweetsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSweetDto: UpdateSweetDto) {
    return this.sweetsService.update(+id, updateSweetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sweetsService.remove(+id);
  }
}
