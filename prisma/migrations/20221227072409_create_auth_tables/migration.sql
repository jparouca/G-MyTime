/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `tbl_users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "tbl_users" ADD COLUMN "avatar_url" TEXT;
ALTER TABLE "tbl_users" ADD COLUMN "email" TEXT;

-- CreateTable
CREATE TABLE "tbl_accounts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    CONSTRAINT "tbl_accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "tbl_users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tbl_sessions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "session_token" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires" DATETIME NOT NULL,
    CONSTRAINT "tbl_sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "tbl_users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "tbl_accounts_provider_provider_account_id_key" ON "tbl_accounts"("provider", "provider_account_id");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_sessions_session_token_key" ON "tbl_sessions"("session_token");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_users_email_key" ON "tbl_users"("email");
