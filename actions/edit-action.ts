"use server";

import getDbConnection from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updatePostAction(data: {
    postId: string;
    content: string;
  }) {
    const {postId, content} = data;

    const user = await currentUser();
    if(!user){
        redirect("/sign-in");
    }

    try {
       const sql = await getDbConnection();
       const [title, ...contentParts] = content?.split("\n\n") || [];
       const updatedTitle = title.split("#")[1].trim();
       await sql`UPDATE posts SET content = ${content}, title = ${updatedTitle} where id = ${postId}`;

    revalidatePath(`/posts/${postId}`); 
    } catch (error) {
        console.error("Error occured in updating the post" , postId);
        return{
            success: false,
        }
    }
    


    return{
        success: true,
    };
}