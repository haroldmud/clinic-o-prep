//seeds.ts
import { PrismaClient } from '@prisma/client'; //sends query to the database
import * as bcrypt from 'bcrypt'; //hashes the password

// Instantiate PrismaClient
const prisma = new PrismaClient();

const roundOfHashing = 10;

async function main() {
  //create two dummy users

  const user1password = await bcrypt.hash('ipupa-password', roundOfHashing);
  const user2password = await bcrypt.hash('tesfaye-password', roundOfHashing);
  const user1 = await prisma.user.upsert({
    //upsert is a function that creates a new
    //record if it doesn't exist, otherwise updates the existing record
    where: { email: 'ipupa@tokos.com' },
    update: {
      password: user1password,
    },
    create: {
      email: 'ipupa@tokos.com',
      name: 'Fally Ipupa',
      password: user1password,
      role: 'USER',
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'tesfaye@xo.com' },
    update: {
      password: user2password, //there is an error because typescript doesn't know that password is a field in the user model
    },
    create: {
      name: 'The Weeknd',
      email: 'tesfaye@xo.com',
      password: user2password,
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
