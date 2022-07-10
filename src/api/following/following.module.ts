import { Module } from '@nestjs/common';
import { FollowingService } from 'src/api/following/following.service';
import { FollowingController } from 'src/api/following/following.controller';

@Module({
  controllers: [FollowingController],
  providers: [FollowingService]
})
export class FollowingModule {}
