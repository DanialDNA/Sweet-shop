import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { errorList } from 'src/errorList';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';

@Injectable()
export class ShopsService {
    constructor(private prisma: PrismaService) { }


    async create(createShopDto: CreateShopDto) {
        try {
            const shop = await this.prisma.shop.create({data: createShopDto})        
            return 
            
        } catch (error) {
            throw new HttpException(errorList.internalServerError, HttpStatus.INTERNAL_SERVER_ERROR)

        }

    }

    async findAll() {
        try {
            const shops = await this.prisma.shop.findMany({})
            return shops

        } catch (error) {
            throw new HttpException(errorList.internalServerError, HttpStatus.INTERNAL_SERVER_ERROR)

        }

    }

    findOne(id: number) {
        return `This action returns a #${id} shop`;
    }

    update(id: number, updateShopDto: UpdateShopDto) {
        return `This action updates a #${id} shop`;
    }

    remove(id: number) {
        return `This action removes a #${id} shop`;
    }
}
