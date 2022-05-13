import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags} from '@nestjs/swagger';

import { ShopsService } from './shops.service';
import { CreateShopDto } from './dto/create-shop.dto';

import { Shop } from '../schemas';

@ApiTags('shop')
@Controller('shops')
export class ShopsController {
  constructor(private readonly shopsService: ShopsService) { }

  @Get()
  list(): Promise<Shop[]> {
    return this.shopsService.findAll();
  }

  @Post()
  create(@Body() createdShopDto: CreateShopDto): Promise<Shop> {
    console.log('created shops', createdShopDto);
    return this.shopsService.create(createdShopDto);
  }
}
