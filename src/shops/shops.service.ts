import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Shop, ShopDocument } from '../schemas';
import { CreateShopDto } from './dto/create-shop.dto';

@Injectable()
export class ShopsService {
  constructor(@InjectModel(Shop.name) private shopModel: Model<ShopDocument>) {}

  async create(createShopDto: CreateShopDto): Promise<Shop> {
    const createdShop = new this.shopModel(createShopDto);
    return createdShop.save();
  }

  async findAll(): Promise<Shop[]> {
    return this.shopModel.find().exec();
  }
}




