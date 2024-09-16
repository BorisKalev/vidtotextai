import getDbConnection from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Posts({
  params: { id },
}: {
  params: { id: string };
}) {
  const user = await currentUser();
  if (!user) {
    return redirect("/sign-in");
  }
  const sql = await getDbConnection();
  const posts =
    await sql`SELECT * FROM POSTS WHERE user_id = ${user.id} AND id = ${id}`;
  return <div>{JSON.stringify(posts)}</div>;
}
