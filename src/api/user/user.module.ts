import { Module } from '@nestjs/common';
import { UserController } from '@/api/user/controllers/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from 'src/api/user/schema/user.schema';
import { UserService } from '@/api/user/services/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [TypeOrmModule.forFeature([UserSchema])],
})
export class UserModule {}
