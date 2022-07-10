import { Module } from '@nestjs/common';
import { AvatarService } from 'src/api/avatar/avatar.service';
import { AvatarController } from 'src/api/avatar/avatar.controller';

@Module({
  controllers: [AvatarController],
  providers: [AvatarService]
})
export class AvatarModule {}
