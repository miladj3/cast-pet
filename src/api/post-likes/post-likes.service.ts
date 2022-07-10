import { Injectable } from '@nestjs/common';
import { CreatePostLikeDto } from 'src/api/post-likes/dto/create-post-like.dto';
import { UpdatePostLikeDto } from 'src/api/post-likes/dto/update-post-like.dto';

@Injectable()
export class PostLikesService {
  create(createPostLikeDto: CreatePostLikeDto) {
    return 'This action adds a new postLike';
  }

  findAll() {
    return `This action returns all postLikes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postLike`;
  }

  update(id: number, updatePostLikeDto: UpdatePostLikeDto) {
    return `This action updates a #${id} postLike`;
  }

  remove(id: number) {
    return `This action removes a #${id} postLike`;
  }
}
