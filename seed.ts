import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  for (let i = 1; i <= 5; i++) {
    await prisma.user.create({
      data: {
        name: `User ${i}`,
        email: `user${i}@example.com`,
        profile: {
          create: {
            bio: `Đây là bio của User ${i}`,
            avatarUrl: `https://example.com/avatar${i}.jpg`,
          },
        },
        posts: {
          create: Array.from({ length: 3 }, (_, j) => ({
            title: `Bài viết ${j + 1} của User ${i}`,
            content: `Đây là nội dung bài viết thứ ${j + 1} của User ${i}.`,
            published: (j + 1) % 2 === 0, // Ví dụ: publish các bài viết chẵn
          })),
        },
      },
    });
  }

  console.log('Seed data inserted successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
