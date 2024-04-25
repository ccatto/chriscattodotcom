-- CreateTable
CREATE TABLE "playing_with_neon" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "value" REAL,

    CONSTRAINT "playing_with_neon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "navigation" (
    "navigation_id" SERIAL NOT NULL,
    "nav_name" VARCHAR(40) NOT NULL,
    "nav_link" VARCHAR(100),
    "nav_image" VARCHAR(100),
    "created_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "nav_level" VARCHAR(10),
    "nav_one_level_up" VARCHAR(80),

    CONSTRAINT "navigation_pkey" PRIMARY KEY ("navigation_id")
);

-- CreateTable
CREATE TABLE "pages" (
    "page_id" SERIAL NOT NULL,
    "page_name" VARCHAR(100) NOT NULL,
    "page_title" VARCHAR(200),
    "page_description" VARCHAR(2000),
    "created_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pages_pkey" PRIMARY KEY ("page_id")
);

