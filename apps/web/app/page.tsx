export const dynamic = "force-dynamic";
export const revalidate = 0;

async function getUsers() {
  // Avoid hitting Postgres during Docker image build/prerender.
  // Next.js will run this at request-time in production.
  if (process.env.NEXT_PHASE === "phase-production-build") return [];
  if (process.env.SKIP_DB === "1") return [];

  const { default: prisma } = await import("db");
  return prisma.user.findMany();
}

export default async function Home() {
  const users = await getUsers();
  return <pre>{JSON.stringify(users, null, 2)}</pre>;
}
