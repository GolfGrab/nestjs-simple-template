import { UserDto } from "@/users/dto/user.dto";
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from "@nestjs/swagger";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({
    type: () => UserDto,
  })
  create(@Body() createUserDto: CreateUserDto): UserDto {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOkResponse({
    type: () => UserDto,
    isArray: true,
  })
  findAll(): UserDto[] {
    return this.usersService.findAll();
  }

  @Get(":id")
  @ApiOkResponse({
    type: () => UserDto,
  })
  @ApiNotFoundResponse({
    type: String,
  })
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(":id")
  @ApiOkResponse({
    type: () => UserDto,
  })
  @ApiNotFoundResponse({
    type: String,
  })
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(":id")
  @ApiOkResponse({
    type: () => UserDto,
  })
  @ApiNotFoundResponse({
    type: String,
  })
  remove(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }
}
