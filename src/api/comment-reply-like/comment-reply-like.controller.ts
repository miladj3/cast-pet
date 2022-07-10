import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentReplyLikeService } from 'src/api/comment-reply-like/comment-reply-like.service';
import { CreateCommentReplyLikeDto } from 'src/api/comment-reply-like/dto/create-comment-reply-like.dto';
import { UpdateCommentReplyLikeDto } from 'src/api/comment-reply-like/dto/update-comment-reply-like.dto';

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
