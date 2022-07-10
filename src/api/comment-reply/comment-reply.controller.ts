import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentReplyService } from 'src/api/comment-reply/comment-reply.service';
import { CreateCommentReplyDto } from 'src/api/comment-reply/dto/create-comment-reply.dto';
import { UpdateCommentReplyDto } from 'src/api/comment-reply/dto/update-comment-reply.dto';

@Controller('comment-reply')
export class CommentReplyController {
  constructor(private readonly commentReplyService: CommentReplyService) {}

  @Post()
  create(@Body() createCommentReplyDto: CreateCommentReplyDto) {
    return this.commentReplyService.create(createCommentReplyDto);
  }

  @Get()
  findAll() {
    return this.commentReplyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentReplyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentReplyDto: UpdateCommentReplyDto) {
    return this.commentReplyService.update(+id, updateCommentReplyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentReplyService.remove(+id);
  }
}
