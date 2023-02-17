import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { errorList } from 'src/errorList';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';

@Injectable()
export class SellersService {
    constructor(private prisma: PrismaService) { }


    async create(createSellerDto: CreateSellerDto) {
        try {
            const seller = await this.prisma.seller.create({ data: createSellerDto })
            return seller
        } catch (error) {
            throw new HttpException(errorList.internalServerError, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async findAll() {
        try {
            const sellers = await this.prisma.seller.findMany({})
            return sellers

        } catch (error) {
            throw new HttpException(errorList.internalServerError, HttpStatus.INTERNAL_SERVER_ERROR)
        }

    }

    findOne(id: number) {
        return `This action returns a #${id} seller`;
    }

    update(id: number, updateSellerDto: UpdateSellerDto) {
        return `This action updates a #${id} seller`;
    }

    remove(id: number) {
        return `This action removes a #${id} seller`;
    }
}
