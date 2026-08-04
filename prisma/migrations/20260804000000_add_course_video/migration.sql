-- CreateTable
CREATE TABLE "CourseVideo" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "youtubeUrl" TEXT NOT NULL,
    "youtubeId" TEXT NOT NULL,
    "videoFileUrl" TEXT,
    "source" TEXT NOT NULL DEFAULT 'YOUTUBE',
    "category" TEXT,
    "status" "PublishStatus" NOT NULL DEFAULT 'PUBLISHED',
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CourseVideo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CourseVideo_status_idx" ON "CourseVideo"("status");

-- CreateIndex
CREATE INDEX "CourseVideo_order_idx" ON "CourseVideo"("order");
