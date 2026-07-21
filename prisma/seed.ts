import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcryptjs";
import { courses, services, portfolioItems, blogPosts } from "../data/content";

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL || "digisparkxuniverse@gmail.com";
  const password = process.env.ADMIN_PASSWORD || "ChangeThisStrongPassword123!";

  const admin = await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      name: "Mohammed Javed",
      email,
      role: Role.ADMIN,
      passwordHash: await bcrypt.hash(password, 12),
      emailVerified: new Date()
    }
  });

  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: service,
      create: service
    });
  }

  for (const course of courses) {
    await prisma.course.upsert({
      where: { slug: course.slug },
      update: course,
      create: course
    });
  }

  for (const item of portfolioItems) {
    await prisma.portfolioItem.create({
      data: item
    });
  }

  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: post,
      create: { ...post, authorId: admin.id }
    });
  }
}

main()
  .then(async () => prisma.$disconnect())
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
