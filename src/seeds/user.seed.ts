import { AppDataSource } from '../data-source';
import { Users } from '../users/users.entity';

async function seedUsers() {
  await AppDataSource.initialize();
  const userRepo = AppDataSource.getRepository(Users);

  const users = [
    userRepo.create({ name: 'Alice' }),
    userRepo.create({ name: 'Bob' }),
    userRepo.create({ name: 'Charlie' }),
  ];

  await userRepo.save(users);
  console.log(
    'Seeded users:',
    users.map((u) => u.name),
  );
  await AppDataSource.destroy();
}

seedUsers().catch((err) => {
  console.error('Seeding error:', err);
  process.exit(1);
});
