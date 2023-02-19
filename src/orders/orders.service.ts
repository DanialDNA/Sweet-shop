import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { errorList } from 'src/errorList';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
    constructor(private prisma: PrismaService) { }

    async create(createOrderDto: CreateOrderDto) {
        try {
            const order = await this.prisma.order.create({ data: createOrderDto })
            return order

        } catch (error) {
            throw new HttpException(errorList.internalServerError, HttpStatus.INTERNAL_SERVER_ERROR)
        }

    }

    async findAll() {
        try {
            const orders = await this.prisma.order.findMany({})
            return orders

        } catch (error) {
            throw new HttpException(errorList.internalServerError, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async findOne(id: number) {
        try {
            const order = await this.prisma.order.findUnique({ where: { id } })

            if (order) {
                return order
            } else {
                throw new HttpException(errorList.notFound, HttpStatus.NOT_FOUND)
            }

        } catch (error) {
            if (error instanceof HttpException) {
                throw error
            
            } else {
                throw new HttpException(errorList.internalServerError, HttpStatus.INTERNAL_SERVER_ERROR)
            }
        }
    }

    update(id: number, updateOrderDto: UpdateOrderDto) {
        return `This action updates a #${id} order`;
    }

    remove(id: number) {
        return `This action removes a #${id} order`;
    }
}
