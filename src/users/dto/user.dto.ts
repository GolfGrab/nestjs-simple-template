import { User } from "@/users/entities/user.entity";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class UserDto implements Omit<User, "password"> {
  @ApiProperty()
  id: number;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  username: string;

  @ApiPropertyOptional({ type: String })
  email?: string | undefined;
}
