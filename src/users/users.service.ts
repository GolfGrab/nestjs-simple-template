import { DbService } from "@/db/db.service";
import { UserDto } from "@/users/dto/user.dto";
import { User } from "@/users/entities/user.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
  constructor(private readonly dbService: DbService) {}

  create(createUserDto: CreateUserDto): UserDto {
    const { password: _, ...user } = this.dbService.insertOne(
      "users",
      createUserDto,
    );
    return user;
  }

  findAll(): UserDto[] {
    return this.dbService
      .findAll("users")
      .map<UserDto>(({ password: _, ...user }) => user);
  }

  findOne(id: number) {
    const user = this.dbService.findOne("users", id);
    if (!user) {
      throw new NotFoundException("User not found");
    }
    const { password: _, ...returnUser } = user;
    return returnUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.dbService.findOne("users", id);
    if (!user) {
      throw new NotFoundException("user not found");
    }

    const newUser: User = { ...user, ...updateUserDto };

    return this.dbService.updateOne("users", id, newUser);
  }

  remove(id: number) {
    const user = this.dbService.deleteOne("users", id);
    if (!user) {
      throw new NotFoundException("user not found");
    }

    return user;
  }
}
