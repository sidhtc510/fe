import prisma from '@/lib/prisma'


export default async function Home() {
  const users = await prisma.user.findMany();
  console.log(users);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
        Supabase:
      </h1>
      <ol className="font-[family-name:var(--font-geist-sans)]">
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
