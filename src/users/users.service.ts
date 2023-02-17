import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { errorList } from 'src/errorList';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async create(createUserDto: CreateUserDto) {
        try {
            const user = await this.prisma.user.create({ data: createUserDto })
            return user;

        } catch (error) {
            // "P2002 means duplicate user in "
            if (error instanceof PrismaClientKnownRequestError && error.code === "P2002") {
                if (error.meta.target[0] === "username") {
                    throw new HttpException(errorList.duplicateUsername, HttpStatus.CONFLICT)

                } else if (error.meta.target[0] === "email") {
                    throw new HttpException(errorList.duplicateEmail, HttpStatus.CONFLICT)

                } else {
                    throw new HttpException(errorList.internalServerError, HttpStatus.INTERNAL_SERVER_ERROR)
                }
            }
            else {
                throw new HttpException(errorList.internalServerError, HttpStatus.INTERNAL_SERVER_ERROR)
            }
        }
    }

    async findAll() {
        try {
            const users = await this.prisma.user.findMany({})
            return users;

        } catch (error) {
            throw new HttpException(errorList.internalServerError, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async findOne(id: number) {
        try {
            const user = await this.prisma.user.findUnique({ where: { id } })

            if (user) {
                return user;
            } else {
                // this error is passed to 'catch' and will be handled there
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

    async update(id: number, updateUserDto: UpdateUserDto) {
        try {
            const user = await this.prisma.user.update({
                where: { id },
                data: updateUserDto
            })
            return user

        } catch (error) {
            // "P2002 means duplicate user in "
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === "P2002") {

                    if (error.meta.target[0] === "username") {
                        throw new HttpException(errorList.duplicateUsername, HttpStatus.CONFLICT)

                    } else if (error.meta.target[0] === "email") {
                        throw new HttpException(errorList.duplicateEmail, HttpStatus.CONFLICT)

                    } else {
                        throw new HttpException(errorList.internalServerError, HttpStatus.INTERNAL_SERVER_ERROR)
                    }

                    // "P2025 means does not exist"
                } else if (error.code === "P2025") {
                    throw new HttpException(errorList.notFound, HttpStatus.NOT_FOUND)
                }
            }
            else {
                throw new HttpException(errorList.internalServerError, HttpStatus.INTERNAL_SERVER_ERROR)
            }
        }
    }


    async remove(id: number) {
        try {
            const user = await this.prisma.user.delete({
                where: { id }
            })
            return user;

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
