import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ShopsModule } from './shops/shops.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongodb/nest'),
    ProductsModule, 
    ShopsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
