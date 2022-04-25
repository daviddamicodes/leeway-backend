import { CreateUserDto } from '@app/dto/createUserDto';
import { LoginDto } from '@app/dto/loginDto';
import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
// import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { UserResponseInterface } from './userResponse.interface';
import { Request } from 'express';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/')
  @UsePipes(new ValidationPipe())
  async createUser(
    @Body('user') createUserDto: CreateUserDto,
  ): Promise<UserResponseInterface> {
    const user = await this.userService.createUser(createUserDto);
    return this.userService.buildUserResponse(user);
  }

  @Post('/login')
  @UsePipes(new ValidationPipe())
  async login(
    @Body('user') loginDto: LoginDto,
  ): Promise<UserResponseInterface> {
    // return 'Login' as any;
    const user = await this.userService.loginUser(loginDto);
    return this.userService.buildUserResponse(user);
  }

  @Get('/')
  async currentUser(@Req() request: Request): Promise<UserResponseInterface> {
    // console.log(request.headers);
    return 'currentUser' as any;
  }
}
