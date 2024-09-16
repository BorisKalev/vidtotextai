import ContentEditor from "@/components/content/content-editor";
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
  const posts: any =
    await sql`SELECT * FROM POSTS WHERE user_id = ${user.id} AND id = ${id}`;
  return (
    <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-0 mb-12 mt-28">
      <ContentEditor posts={posts}></ContentEditor>
    </div>
  );
}
