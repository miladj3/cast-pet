import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { AvatarModule } from './avatar/avatar.module';
import { Avatar } from './avatar/entities/avatar.entity';
import { CommentLikesModule } from './comment-likes/comment-likes.module';
import { CommentLike } from './comment-likes/entities/comment-like.entity';
import { CommentReplyLikeModule } from './comment-reply-like/comment-reply-like.module';
import { CommentReplyLike } from './comment-reply-like/entities/comment-reply-like.entity';
import { CommentReplyModule } from './comment-reply/comment-reply.module';
import { CommentReply } from './comment-reply/entities/comment-reply.entity';
import { CommentsModule } from './comments/comments.module';
import { Comment } from './comments/entities/comment.entity';
import { Following } from './following/entities/following.entity';
import { FollowingModule } from './following/following.module';
import { Pet } from './pets/entities/pet.entity';
import { PostLike } from './post-likes/entities/post-like.entity';
import { PostLikesModule } from './post-likes/post-likes.module';
import { Post } from './posts/entities/post.entity';
import { PostsModule } from './posts/posts.module';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Pet,
      Avatar,
      Post,
      Comment,
      CommentLike,
      PostLike,
      CommentReply,
      CommentReplyLike,
      Following
    ]),
    UserModule,
    AvatarModule,
    PostsModule,
    CommentsModule,
    CommentLikesModule,
    PostLikesModule,
    CommentReplyModule,
    CommentReplyLikeModule,
    FollowingModule,
    AuthModule
  ],
  providers: [],
  exports: [],
  controllers: []
})
export class ApiModule {}
