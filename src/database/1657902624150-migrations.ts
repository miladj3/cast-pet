import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1657902624150 implements MigrationInterface {
    name = 'migrations1657902624150'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "lastLoginAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "CommentReplyLike" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "CommentReplyLike" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "CommentReplyLike" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "CommentReplyLike" ADD "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "CommentReply" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "CommentReply" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "CommentReply" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "CommentReply" ADD "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "CommentLike" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "CommentLike" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "CommentLike" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "CommentLike" ADD "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Comment" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "Comment" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Comment" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "Comment" ADD "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "PostLike" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "PostLike" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "PostLike" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "PostLike" ADD "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Post" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "Post" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Post" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "Post" ADD "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Following" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "Following" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Following" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "Following" ADD "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Pet" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "Pet" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Pet" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "Pet" ADD "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Avatar" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "Avatar" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Avatar" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "Avatar" ADD "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Avatar" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "Avatar" ADD "updateAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Avatar" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "Avatar" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Pet" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "Pet" ADD "updateAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Pet" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "Pet" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Following" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "Following" ADD "updateAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Following" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "Following" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Post" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "Post" ADD "updateAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Post" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "Post" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "PostLike" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "PostLike" ADD "updateAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "PostLike" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "PostLike" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Comment" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "Comment" ADD "updateAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Comment" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "Comment" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "CommentLike" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "CommentLike" ADD "updateAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "CommentLike" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "CommentLike" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "CommentReply" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "CommentReply" ADD "updateAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "CommentReply" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "CommentReply" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "CommentReplyLike" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "CommentReplyLike" ADD "updateAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "CommentReplyLike" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "CommentReplyLike" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updateAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastLoginAt"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
    }

}
