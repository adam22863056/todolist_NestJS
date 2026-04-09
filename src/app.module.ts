import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TdlModule } from './tdl/tdl.module';
import { SequelizeModule } from './models/sequelize.module';
import { TodoListController } from './tdl/tdl.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule, SequelizeModule],
  controllers: [TodoListController, AppController],
  providers: [AppService],
})
export class AppModule {}
