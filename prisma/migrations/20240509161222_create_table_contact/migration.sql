-- CreateTable
CREATE TABLE "pages" (
    "page_id" SERIAL NOT NULL,
    "page_name" VARCHAR(100) NOT NULL,
    "page_title" VARCHAR(200),
    "page_description" VARCHAR(2000),
    "created_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "is_active" BOOLEAN DEFAULT false,
    "is_draft" BOOLEAN DEFAULT true,
    "page_body" VARCHAR(30000),

    CONSTRAINT "pages_pkey" PRIMARY KEY ("page_id")
);
