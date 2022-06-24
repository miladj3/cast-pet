import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { ormConfig } from "./ormconfig";
import { User } from "./user/entities/user.entity";
import { Pet } from "./pets/entities/pet.entity";
import { AvatarModule } from './avatar/avatar.module';
import { FollowersModule } from './followers/followers.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { CommentLikesModule } from './comment-likes/comment-likes.module';
import { PostLikesModule } from './post-likes/post-likes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      entities: [User, Pet]
    }),
    UserModule,
    AvatarModule,
    FollowersModule,
    PostsModule,
    CommentsModule,
    CommentLikesModule,
    PostLikesModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
