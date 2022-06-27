import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { Pet } from './pets/entities/pet.entity';
import { AvatarModule } from './avatar/avatar.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { CommentLikesModule } from './comment-likes/comment-likes.module';
import { PostLikesModule } from './post-likes/post-likes.module';
import { CommentReplyModule } from './comment-reply/comment-reply.module';
import { CommentReplyLikeModule } from './comment-reply-like/comment-reply-like.module';
import { FollowingModule } from './following/following.module';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			entities: [User, Pet],
		}),
		UserModule,
		AvatarModule,
		PostsModule,
		CommentsModule,
		CommentLikesModule,
		PostLikesModule,
		CommentReplyModule,
		CommentReplyLikeModule,
		FollowingModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
