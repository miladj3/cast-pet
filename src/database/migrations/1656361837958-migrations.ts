import { MigrationInterface, QueryRunner } from 'typeorm';

export class migrations1656361837958 implements MigrationInterface {
  name = 'migrations1656361837958';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "CommentLike" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "isRemoved" boolean NOT NULL, "petId" integer, "commentId" integer, CONSTRAINT "PK_af31076a6e97882a0a3faef97bf" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "CommentReplyLike" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "isRemoved" boolean NOT NULL, "commentReplayId" integer, "petId" integer, CONSTRAINT "PK_87fa1382b507083cac02ed6786b" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "CommentReply" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "isRemoved" boolean NOT NULL, "name" text NOT NULL, "commentId" integer, CONSTRAINT "PK_7c325fbfb7fafbb947ef0b5f0b1" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "Comment" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "isRemoved" boolean NOT NULL, "name" text NOT NULL, "postId" integer, CONSTRAINT "PK_fe8d6bf0fcb531dfa75f3fd5bdb" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "PostLike" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "isRemoved" boolean NOT NULL, "petId" integer, "postId" integer, CONSTRAINT "PK_55d6c6fdbc218ce5bd5966dcf5b" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "Post" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "isRemoved" boolean NOT NULL, "message" text NOT NULL, "petId" integer, CONSTRAINT "PK_c4d3b3dcd73db0b0129ea829f9f" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "Following" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "isRemoved" boolean NOT NULL, "petId" integer, CONSTRAINT "PK_0fd74715099938a76b97f80b068" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "Pet" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "isRemoved" boolean NOT NULL, "name" text NOT NULL, "pedigree" text NOT NULL, "gender" text NOT NULL, "bio" text NOT NULL, "story" text NOT NULL, "userid" integer, "petId" integer, CONSTRAINT "PK_f3a87a15b3b82516f66f1fd2d6a" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "Avatar" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "isRemoved" boolean NOT NULL, "minio" text NOT NULL, "alt" text NOT NULL, "isActive" boolean NOT NULL, "petId" integer, CONSTRAINT "PK_b290694756008c06fc0ee5d0c2c" PRIMARY KEY ("id"))`);
    await queryRunner.query(`ALTER TABLE "CommentLike" ADD CONSTRAINT "FK_33b74bf89b8442767ee241f9b00" FOREIGN KEY ("petId") REFERENCES "Pet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "CommentLike" ADD CONSTRAINT "FK_3ab41634adae444fcd58b2812f5" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "CommentReplyLike" ADD CONSTRAINT "FK_04b8fc85fb3266d9d0a53f20994" FOREIGN KEY ("commentReplayId") REFERENCES "CommentReply"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "CommentReplyLike" ADD CONSTRAINT "FK_1d56541e95de4a44728889161c4" FOREIGN KEY ("petId") REFERENCES "Pet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "CommentReply" ADD CONSTRAINT "FK_c8304ddfac95a0f806e3ab454d9" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "Comment" ADD CONSTRAINT "FK_fb770b565e79f3a4a2ecef894a7" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "PostLike" ADD CONSTRAINT "FK_7872130e131df193a2e7847ed85" FOREIGN KEY ("petId") REFERENCES "Pet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "PostLike" ADD CONSTRAINT "FK_13cbe8712e008acfe26617d47ea" FOREIGN KEY ("postId") REFERENCES "Pet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "Post" ADD CONSTRAINT "FK_b87c1829bf44ed0f95af5164d18" FOREIGN KEY ("petId") REFERENCES "Pet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "Following" ADD CONSTRAINT "FK_29145332425a09e2308dab12810" FOREIGN KEY ("petId") REFERENCES "Pet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "Pet" ADD CONSTRAINT "FK_8072c975b9d5551edd0aed80258" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "Pet" ADD CONSTRAINT "FK_2a1e6d6ecb9c8ca3e851064d2b2" FOREIGN KEY ("petId") REFERENCES "Pet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    await queryRunner.query(`ALTER TABLE "Avatar" ADD CONSTRAINT "FK_3c848a31b388c5f0d57627df416" FOREIGN KEY ("petId") REFERENCES "Pet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "Avatar" DROP CONSTRAINT "FK_3c848a31b388c5f0d57627df416"`);
    await queryRunner.query(`ALTER TABLE "Pet" DROP CONSTRAINT "FK_2a1e6d6ecb9c8ca3e851064d2b2"`);
    await queryRunner.query(`ALTER TABLE "Pet" DROP CONSTRAINT "FK_8072c975b9d5551edd0aed80258"`);
    await queryRunner.query(`ALTER TABLE "Following" DROP CONSTRAINT "FK_29145332425a09e2308dab12810"`);
    await queryRunner.query(`ALTER TABLE "Post" DROP CONSTRAINT "FK_b87c1829bf44ed0f95af5164d18"`);
    await queryRunner.query(`ALTER TABLE "PostLike" DROP CONSTRAINT "FK_13cbe8712e008acfe26617d47ea"`);
    await queryRunner.query(`ALTER TABLE "PostLike" DROP CONSTRAINT "FK_7872130e131df193a2e7847ed85"`);
    await queryRunner.query(`ALTER TABLE "Comment" DROP CONSTRAINT "FK_fb770b565e79f3a4a2ecef894a7"`);
    await queryRunner.query(`ALTER TABLE "CommentReply" DROP CONSTRAINT "FK_c8304ddfac95a0f806e3ab454d9"`);
    await queryRunner.query(`ALTER TABLE "CommentReplyLike" DROP CONSTRAINT "FK_1d56541e95de4a44728889161c4"`);
    await queryRunner.query(`ALTER TABLE "CommentReplyLike" DROP CONSTRAINT "FK_04b8fc85fb3266d9d0a53f20994"`);
    await queryRunner.query(`ALTER TABLE "CommentLike" DROP CONSTRAINT "FK_3ab41634adae444fcd58b2812f5"`);
    await queryRunner.query(`ALTER TABLE "CommentLike" DROP CONSTRAINT "FK_33b74bf89b8442767ee241f9b00"`);
    await queryRunner.query(`DROP TABLE "Avatar"`);
    await queryRunner.query(`DROP TABLE "Pet"`);
    await queryRunner.query(`DROP TABLE "Following"`);
    await queryRunner.query(`DROP TABLE "Post"`);
    await queryRunner.query(`DROP TABLE "PostLike"`);
    await queryRunner.query(`DROP TABLE "Comment"`);
    await queryRunner.query(`DROP TABLE "CommentReply"`);
    await queryRunner.query(`DROP TABLE "CommentReplyLike"`);
    await queryRunner.query(`DROP TABLE "CommentLike"`);
  }
}
