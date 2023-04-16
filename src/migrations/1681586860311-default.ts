import { MigrationInterface, QueryRunner } from "typeorm";

export class default1681586860311 implements MigrationInterface {
    name = 'default1681586860311'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`userposts\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, \`description\` text NOT NULL, \`content\` varchar(255) NOT NULL, \`user_id\` int NULL, UNIQUE INDEX \`IDX_4b6e3d6a5ecd543e5ea395b012\` (\`content\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`userposts\` ADD CONSTRAINT \`FK_3298de9e74bb6bdd66349c1733b\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`userposts\` DROP FOREIGN KEY \`FK_3298de9e74bb6bdd66349c1733b\``);
        await queryRunner.query(`DROP INDEX \`IDX_4b6e3d6a5ecd543e5ea395b012\` ON \`userposts\``);
        await queryRunner.query(`DROP TABLE \`userposts\``);
    }

}
