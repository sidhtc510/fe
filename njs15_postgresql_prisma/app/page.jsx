import prisma from '@/lib/prisma'

export default async function Home() {
  const users = await prisma.user.findMany();
  console.log(users);

  return (
    <div className="">
      <ol className="">
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            id - {user.id} |
            name - {user.name} |
            email - {user.email} |
            dateOfBirth - {user.dateOfBirth
              ? new Date(user.dateOfBirth).toLocaleDateString()
              : 'не указана'} |
            crated_at - {new Date(user.created_at).toLocaleDateString()}
          </li>
        ))}
      </ol>
    </div>
  );
}
