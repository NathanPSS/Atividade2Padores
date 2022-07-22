-- AlterTable
CREATE SEQUENCE "produtos_id_seq";
ALTER TABLE "produtos" ALTER COLUMN "id" SET DEFAULT nextval('produtos_id_seq');
ALTER SEQUENCE "produtos_id_seq" OWNED BY "produtos"."id";
