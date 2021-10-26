-- CreateEnum
CREATE TYPE "TimelineURLType" AS ENUM ('STATIC', 'GIST');

-- CreateTable
CREATE TABLE "Timeline" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "urlType" "TimelineURLType" NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Timeline_pkey" PRIMARY KEY ("id")
);
