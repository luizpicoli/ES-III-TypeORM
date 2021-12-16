import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationClassLesson1634646856436 implements MigrationInterface {
    name = 'RelationClassLesson1634646856436'

    public async up(queryRunner: QueryRunner): Promise<void> {
       
        await queryRunner.query(`ALTER TABLE "content" DROP CONSTRAINT "REL_0b349f6b8ca7f05eed39ffb956"`);
        await queryRunner.query(`ALTER TABLE "content" DROP COLUMN "lessonId"`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD "classId" uuid`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD "description" character varying `);
        await queryRunner.query(`ALTER TABLE "lesson" ADD CONSTRAINT "FK_f327c28c988cbfe23a725982727" FOREIGN KEY ("classId") REFERENCES "class"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "FK_f327c28c988cbfe23a725982727"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD "description" character varying(150) `);
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "classId"`);
        await queryRunner.query(`ALTER TABLE "content" ADD "lessonId" uuid`);
        await queryRunner.query(`ALTER TABLE "content" ADD CONSTRAINT "REL_0b349f6b8ca7f05eed39ffb956" UNIQUE ("lessonId")`);
       
    }

}
