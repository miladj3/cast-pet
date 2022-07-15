import { Module } from '@nestjs/common';
import { FollowingService } from './services/following.service';
import { FollowingController } from './controllers/following.controller';

@Module({
  controllers: [FollowingController],
  providers: [FollowingService]
})
export class FollowingModule {}
