import { MigrationInterface, QueryRunner } from "typeorm";

export class default1678872976498 implements MigrationInterface {
    name = 'default1678872976498'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`teachers\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, \`photo\` text NOT NULL, \`area\` text NOT NULL, \`areaIcon\` text NOT NULL, \`subArea\` text NOT NULL, \`SubAreaIcon\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, \`email\` text NOT NULL, \`password\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`teachers\``);
    }

}
