import { Module } from '@nestjs/common';
import { TodoListController } from './tdl.controller';
import { TdlService } from './tdl.service';

@Module({
  controllers: [TodoListController],
  providers: [TdlService],
})
export class TdlModule {}
