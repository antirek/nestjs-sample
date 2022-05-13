import { ApiProperty } from '@nestjs/swagger';

export class CreateShopDto {
  @ApiProperty()
  readonly title: string;
  
  @ApiProperty()
  readonly address?: string;
}
