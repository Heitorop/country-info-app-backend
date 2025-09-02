import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsersAndCalendarEvents1756815247131 implements MigrationInterface {
    name = 'CreateUsersAndCalendarEvents1756815247131'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "calendar_events" ("id" SERIAL NOT NULL, "countryCode" character varying(255) NOT NULL, "year" integer NOT NULL, "holidays" text array NOT NULL, "userId" integer, CONSTRAINT "PK_faf5391d232322a87cdd1c6f30c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "calendar_events" ADD CONSTRAINT "FK_1c7bc3511809b48395c3eec5484" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "calendar_events" DROP CONSTRAINT "FK_1c7bc3511809b48395c3eec5484"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "calendar_events"`);
    }

}
