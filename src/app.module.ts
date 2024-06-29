import { CRUDServices } from './services/index';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { EICRUDModule } from '@eicrud/core';
import { CRUDEntities } from './services/index';
import { CRUD_CONFIG_KEY } from '@eicrud/core/config';
import { MyConfigService } from './eicrud.config.service';
import { ConfigModule } from '@nestjs/config';
import { MongoDriver } from '@mikro-orm/mongodb';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
   ConfigModule.forRoot(),
   MikroOrmModule.forRoot({
    entities: [...CRUDEntities],
    driver: MongoDriver,
    dbName: "myblog-db",
   }),
   EICRUDModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [
    ...CRUDServices,
    {
      provide: CRUD_CONFIG_KEY,
      useClass: MyConfigService,
    },
  AppService
  ],
})
export class AppModule {}
