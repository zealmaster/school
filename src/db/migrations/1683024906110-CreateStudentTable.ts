import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateStudentTable1683024906110 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE students (id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
        school_id BIGINT UNSIGNED NOT NULL,
        first_name VARCHAR(80) NOT NULL, last_name VARCHAR(80) NOT NULL,
        middle_name VARCHAR(80), date_of_birth VARCHAR(80) NOT NULL, level VARCHAR(20) NOT NULL, address VARCHAR(255) NOT NULL,
        parent_name VARCHAR(255) NOT NULL, parent_phone VARCHAR(100) NOT NULL, passport_picture VARCHAR(255) DEFAULT NULL,
        FOREIGN KEY (school_id) REFERENCES schools(id),
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP, updated_at DATETIME DEFAULT CURRENT_TIMESTAMP)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE students`);
  }
}
