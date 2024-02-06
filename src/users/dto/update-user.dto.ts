import { PartialType } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { CreateUserDto } from "./create-user.dto";

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  firstName?: string | undefined;

  @IsOptional()
  email?: string | undefined;

  @IsOptional()
  lastName?: string | undefined;

  @IsOptional()
  password?: string | undefined;

  @IsOptional()
  username?: string | undefined;
}
