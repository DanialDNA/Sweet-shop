import { Injectable } from '@nestjs/common';
import { CreateSweetDto } from './dto/create-sweet.dto';
import { UpdateSweetDto } from './dto/update-sweet.dto';

@Injectable()
export class SweetsService {
  create(createSweetDto: CreateSweetDto) {
    



  }

  findAll() {
    return `This action returns all sweets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sweet`;
  }

  update(id: number, updateSweetDto: UpdateSweetDto) {
    return `This action updates a #${id} sweet`;
  }

  remove(id: number) {
    return `This action removes a #${id} sweet`;
  }
}
