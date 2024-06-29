import { MongoDriver } from '@mikro-orm/mongodb';
import { Test, TestingModule } from '@nestjs/testing';
import { CommentService } from './comment.service';
import { EICRUDModule } from '@eicrud/core';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Comment } from './comment.entity';
import { MyConfigService } from '../../eicrud.config.service';
import { CRUD_CONFIG_KEY } from '@eicrud/core/config';

describe('AppController', () => {
  let myService: CommentService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        MikroOrmModule.forRoot({
          entities: [Comment],
          driver: MongoDriver,
          dbName: 'test-comment',
        }),
        EICRUDModule.forRoot(),
      ],
      providers: [
        CommentService,
        {
          provide: CRUD_CONFIG_KEY,
          useClass: MyConfigService,
        },
      ],
    }).compile();

    myService = app.get<CommentService>(CommentService);
  });

  describe('root', () => {
    it('should be defined"', () => {
      expect(myService).toBeDefined();
    });
  });
});
