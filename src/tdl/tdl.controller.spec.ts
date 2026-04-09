import { Test, TestingModule } from '@nestjs/testing';
import { TodoListController } from './tdl.controller';

describe('TdlController', () => {
  let controller: TodoListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoListController],
    }).compile();

    controller = module.get<TodoListController>(TodoListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
