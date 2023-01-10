-- CreateTable
CREATE TABLE "user_time_frames" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "week_day" INTEGER NOT NULL,
    "time_start_in_minutes" INTEGER NOT NULL,
    "time_end_in_minutes" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "user_time_frames_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "tbl_users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
