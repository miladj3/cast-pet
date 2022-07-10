import { Module } from '@nestjs/common';
import { UserModule } from '@/api/user/user.module';
import { AvatarModule } from '@/api/avatar/avatar.module';
import { PostsModule } from '@/api/posts/posts.module';
import { CommentsModule } from '@/api/comments/comments.module';
import { CommentLikesModule } from '@/api/comment-likes/comment-likes.module';
import { PostLikesModule } from '@/api/post-likes/post-likes.module';
import { CommentReplyModule } from '@/api/comment-reply/comment-reply.module';
import { CommentReplyLikeModule } from '@/api/comment-reply-like/comment-reply-like.module';
import { FollowingModule } from '@/api/following/following.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@/api/user/entities/user.entity';
import { Pet } from '@/api/pets/entities/pet.entity';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { Avatar } from '@/api/avatar/entities/avatar.entity';
import { Post } from '@/api/posts/entities/post.entity';
import { Comment } from '@/api/comments/entities/comment.entity';
import { CommentLike } from '@/api/comment-likes/entities/comment-like.entity';
import { PostLike } from '@/api/post-likes/entities/post-like.entity';
import { CommentReply } from '@/api/comment-reply/entities/comment-reply.entity';
import { CommentReplyLike } from '@/api/comment-reply-like/entities/comment-reply-like.entity';
import { Following } from '@/api/following/entities/following.entity';

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
