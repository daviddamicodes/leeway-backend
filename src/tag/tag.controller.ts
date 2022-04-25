import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TagEntity } from './tag.entity';
import { TagService } from './tag.service';

@ApiTags('tags')
@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get('/')
  async getAllTags(): Promise<{ tags: string[] }> {
    const tags = await this.tagService.findAll();
    return {
      tags: tags.map((tag) => tag.name),
    };
  }

  @Post('/')
  async createTag(@Body() name): Promise<TagEntity> {
    return this.tagService.createTag(name);
  }
}
