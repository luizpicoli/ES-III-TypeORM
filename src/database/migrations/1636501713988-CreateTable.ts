import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTable1636501713988 implements MigrationInterface {
    name = 'CreateTable1636501713988'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson" ADD CONSTRAINT "UQ_ea6aa4b6228f4941691a9be2620" UNIQUE ("description")`);
        await queryRunner.query(`CREATE TABLE "query-result-cache" ("id" SERIAL NOT NULL, "identifier" character varying, "time" bigint NOT NULL, "duration" integer NOT NULL, "query" text NOT NULL, "result" text NOT NULL, CONSTRAINT "PK_6a98f758d8bfd010e7e10ffd3d3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "query-result-cache"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "UQ_ea6aa4b6228f4941691a9be2620"`);
    }

}
