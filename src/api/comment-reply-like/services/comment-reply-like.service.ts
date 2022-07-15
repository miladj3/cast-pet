import { Injectable } from '@nestjs/common';
import { CreateCommentReplyLikeDto } from '../dto/create-comment-reply-like.dto';
import { UpdateCommentReplyLikeDto } from '../dto/update-comment-reply-like.dto';

@Injectable()
export class CommentReplyLikeService {
  create(createCommentReplyLikeDto: CreateCommentReplyLikeDto) {
    return 'This action adds a new commentReplyLike';
  }

  findAll() {
    return `This action returns all commentReplyLike`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commentReplyLike`;
  }

  update(id: number, updateCommentReplyLikeDto: UpdateCommentReplyLikeDto) {
    return `This action updates a #${id} commentReplyLike`;
  }

  remove(id: number) {
    return `This action removes a #${id} commentReplyLike`;
  }
}
