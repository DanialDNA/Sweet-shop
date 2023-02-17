import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClientExtensionError, PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { errorList } from 'src/errorList';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSweetDto } from './dto/create-sweet.dto';
import { UpdateSweetDto } from './dto/update-sweet.dto';

@Injectable()
export class SweetsService {
    constructor(private prisma: PrismaService) { }

    async create(createSweetDto: CreateSweetDto) {
        try {
            const sweet = await this.prisma.sweet.create({ data: createSweetDto })
            return sweet

        } catch (error) {
            throw new HttpException(errorList.internalServerError, HttpStatus.INTERNAL_SERVER_ERROR)
        }


    }


    findAll() {
        try {
            const sweets = this.prisma.sweet.findMany({})
            return sweets

        } catch (error) {
            throw new HttpException(errorList.internalServerError, HttpStatus.INTERNAL_SERVER_ERROR)
        }

    }

    findOne(id: number) {
        try {
            const sweet = this.prisma.sweet.findUnique({ where: { id } })
            if (sweet) {
                return sweet

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

    update(id: number, updateSweetDto: UpdateSweetDto) {
        try {
            const sweet = this.prisma.sweet.update({ where: { id }, data: updateSweetDto })
            return sweet

        } catch (error) {
            // "P2025 means does not exist"
            if (error instanceof PrismaClientKnownRequestError && error.code === "P2025") {
                throw new HttpException(errorList.notFound, HttpStatus.NOT_FOUND)
            } else {
                throw new HttpException(errorList.internalServerError, HttpStatus.INTERNAL_SERVER_ERROR)
            }
        }
    }

    remove(id: number) {
        try {
            const sweet = this.prisma.sweet.delete( { where: {id}})
            return sweet
        
        } catch (error) {
            // "P2025 means does not exist"
            if (error instanceof PrismaClientKnownRequestError && error.code === "P2025") {
                throw new HttpException(errorList.notFound, HttpStatus.NOT_FOUND)
            } else {
                throw new HttpException(errorList.internalServerError, HttpStatus.INTERNAL_SERVER_ERROR)
            }    
        }
    }
}
