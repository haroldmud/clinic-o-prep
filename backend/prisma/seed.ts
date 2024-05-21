//seeds.ts
import { PrismaClient } from '@prisma/client'; //sends query to the database

// Instantiate PrismaClient
const prisma = new PrismaClient();

async function main() {
  //create two dummy users
  const user1 = await prisma.user.upsert({
    //upsert is a function that creates a new
    //record if it doesn't exist, otherwise updates the existing record
    where: { email: 'ipupa@tokos.com' },
    update: {},
    create: {
      email: 'ipupa@tokos.com',
      name: 'Fally Ipupa',
      role: 'USER',
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'tesfaye@xo.com' },
    update: {},
    create: {
      name: 'The Weeknd',
      email: 'tesfaye@xo.com',
      role: 'ADMIN',
    },
  });
  console.log({ user1, user2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Close the database connection(prisma client) at the end
    await prisma.$disconnect();
  });
