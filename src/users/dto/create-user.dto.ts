import { User } from "@/users/entities/user.entity";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString, Length } from "class-validator";

export class CreateUserDto implements Omit<User, "id"> {
  @IsString()
  @Length(10)
  @ApiProperty({
    minLength: 10,
  })
  firstName: string;

  @IsString()
  @ApiProperty()
  lastName: string;

  @IsString()
  @ApiProperty()
  username: string;

  @IsString()
  @ApiProperty()
  password: string;

  @IsEmail()
  @IsOptional()
  @ApiProperty()
  email?: string;
}
