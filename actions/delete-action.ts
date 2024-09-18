"use server";

import getDbConnection from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deletePostAction(data: { postId: string }) {
  const { postId } = data;

  const user = await currentUser();
  if (!user) {
    redirect("/sign-in"); 
  }

  try {
    const sql = await getDbConnection();
    await sql`DELETE FROM posts WHERE id = ${postId}`;

    // Revalidate the posts list or homepage to reflect the changes
    revalidatePath("/posts");
  } catch (error) {
    console.error("Error occurred while deleting the post", postId, error);
    return {
      success: false,
    };
  }

  return {
    success: true,
  };
}
