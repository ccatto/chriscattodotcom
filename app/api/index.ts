import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  // const allUsers = await prisma.user.findMany()
  // console.log(allUsers)
  const playTableData = await prisma.playing_with_neon.findMany();
  // console.log('playTableData ===', playTableData);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
