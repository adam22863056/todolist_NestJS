import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { promises } from 'dns';
import { CreatedAt } from 'sequelize-typescript';
import { TodoItem } from 'src/models/list.model';
import { CreateTaskDto, PatchTaskDto } from './task.dto';
import { NotFoundError } from 'rxjs';

@ApiTags('Todo list')
@Controller('todo-list')
export class TodoListController {
  @ApiOperation({ summary: 'Get all mission' })
  @ApiOkResponse({ type: TodoItem, isArray: true })
  @Get('list')
  public async list(): Promise<TodoItem[]> {
    return TodoItem.findAll();
  }

  @ApiOperation({ summary: 'Get mission by id' })
  @ApiOkResponse({ type: TodoItem })
  @ApiParam({ name: 'id' })
  @Get(':id')
  public async getItemById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<TodoItem> {
    const item = await TodoItem.findByPk(id);
    if (!item) throw new NotFoundException('Wrong id');
    return item;
  }

  @ApiOperation({ summary: 'Create new task' })
  @ApiBody({ type: CreateTaskDto })
  @ApiOkResponse({ type: TodoItem })
  @Post()
  public async createTask(@Body() taskDate: CreateTaskDto): Promise<TodoItem> {
    const newTask = await TodoItem.create(taskDate);
    return newTask;
  }

  @ApiOperation({ summary: 'Update task' })
  @ApiOkResponse({ type: TodoItem })
  @ApiBody({ type: PatchTaskDto })
  @ApiParam({ name: 'patchId' })
  @Patch(':patchId')
  public async updateTask(
    @Param('patchId', ParseIntPipe) patchId: number,
    @Body() patchTask: PatchTaskDto,
  ): Promise<TodoItem> {
    const getItem = await TodoItem.findByPk(patchId);
    if (!getItem) {
      throw new NotFoundException(`Task with ID ${patchId} not found`);
    }
    await getItem.update(patchTask);
    return getItem;
  }

  @ApiOperation({ summary: 'Delete task' })
  @ApiParam({ name: 'itemId' })
  @ApiOkResponse({ type: Boolean })
  @Delete(':itemId')
  public async deleteTask(
    @Param('itemId', ParseIntPipe) itemId: number,
  ): Promise<boolean> {
    await TodoItem.destroy({ where: { id: itemId } });
    return true;
  }
}
