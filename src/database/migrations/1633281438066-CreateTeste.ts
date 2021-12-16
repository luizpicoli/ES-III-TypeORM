import {MigrationInterface, QueryRunner} from "typeorm";

export default class CreateTeste1633281438066 implements MigrationInterface {

    name = 'CreateTeste1633281438066';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          `CREATE TABLE "college" ("graduations" character varying NOT NULL, "year" integer NOT NULL, "toDeleteColumn" integer NOT NULL, "identificationId" uuid NOT NULL DEFAULT uuid_generate_v4(), "identificationName" character varying NOT NULL, "identificationCnpj" character varying NOT NULL, "identificationCreated_at" TIMESTAMP NOT NULL DEFAULT now(), "identificationUpdated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ea02cccb5b3a75968ef94483fcf" PRIMARY KEY ("identificationId"))`,
        );
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "college"`);
    }

}
