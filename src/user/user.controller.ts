import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "@prisma/client";
import id from "zod/v4/locales/id.js";

@Controller('users')
export class UserController{
    constructor(private readonly userService: UserService){}

    @Get()
    async getAllUsers(): Promise<User[]> {
        const users = await this.userService.getAllUsers();
        return users;
    }

    @Get(':id')
    async getUserById(@Param('id') id: number): Promise<User | null> {
        const users = await this.userService.getUserById(Number(id));
        return users;
    }

    @Post()
    async createUser(@Body() userData: CreateUserDto): Promise<User>{
        const user = await this.userService.createUser(userData);
        return user;
    }

    @Put(':id')
    async updateUser(
        @Param('id') id:number,
        @Body() userData: Partial<CreateUserDto>,
    ): Promise<User | null>{
        const user = await this.userService.updateUser(Number(id), userData);
        
        return user;
    }

    @Delete(':id')
    async deleteUser(@Param('id') id:number): Promise<User|null>{
        const user = await this.userService.deleteUser(Number(id));

        return user;
    }
}