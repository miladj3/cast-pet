import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentReplyLikeService } from './comment-reply-like.service';
import { CreateCommentReplyLikeDto } from './dto/create-comment-reply-like.dto';
import { UpdateCommentReplyLikeDto } from './dto/update-comment-reply-like.dto';

@Controller('comment-reply-like')
export class CommentReplyLikeController {
  constructor(private readonly commentReplyLikeService: CommentReplyLikeService) {}

  @Post()
  create(@Body() createCommentReplyLikeDto: CreateCommentReplyLikeDto) {
    return this.commentReplyLikeService.create(createCommentReplyLikeDto);
  }

  @Get()
  findAll() {
    return this.commentReplyLikeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentReplyLikeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentReplyLikeDto: UpdateCommentReplyLikeDto) {
    return this.commentReplyLikeService.update(+id, updateCommentReplyLikeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentReplyLikeService.remove(+id);
  }
}
