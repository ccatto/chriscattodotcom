-- -- CreateTable
-- CREATE TABLE "playing_with_neon" (
--     "id" SERIAL NOT NULL,
--     "name" TEXT NOT NULL,
--     "value" REAL,

--     CONSTRAINT "playing_with_neon_pkey" PRIMARY KEY ("id")
-- );

-- CreateTable
CREATE TABLE "navigation" (
    "navigation_id" SERIAL NOT NULL,
    "nav_name" VARCHAR(40) NOT NULL,
    "nav_link" VARCHAR(100),
    "nav_image" VARCHAR(100),
    "created_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "navigation_pkey" PRIMARY KEY ("navigation_id")
);

