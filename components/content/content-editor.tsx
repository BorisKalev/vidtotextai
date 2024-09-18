"use client";
import { useCallback, useState } from "react";
import { ForwardRefEditor } from "./forward-ref-editor";
import { useFormState, useFormStatus } from "react-dom";
import { updatePostAction } from "@/actions/edit-action";
import { Button } from "../ui/button";
import { Download, Edit2, Loader2, Trash } from "lucide-react";
import { deletePostAction } from "@/actions/delete-action";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className={`w-40 bg-gradient-to-r from-blue-900 to-indigo-600 hover:from-blue-600 hover:to-indigo-900 text-white font-semibold py-2 px-4 rounded-full shadow-lg transform transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2`}
      disabled={pending}
    >
      {pending ? (
        <span className="flex items-center justify-center">
          <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Updating...
        </span>
      ) : (
        <span className="flex items-center justify-center">
          <Edit2 className="w-5 h-5 mr-2" />
          Update Text
        </span>
      )}
    </Button>
  );
}

const initialState = {
  success: false,
};

type UploadState = {
  success: boolean;
};

type UploadAction = (
  state: UploadState,
  formData: FormData
) => Promise<UploadState>;

export default function ContentEditor({
  posts,
}: {
  posts: Array<{ content: string; title: string; id: string }>;
}) {
  const [content, setContent] = useState(posts[0].content);
  const [isChanged, setIsChanged] = useState(false);
  const router = useRouter();

  const updatedPostActionWithId = updatePostAction.bind(null, {
    postId: posts[0].id,
    content,
  });

  const [state, formAction] = useFormState<UploadState, FormData>(
    updatedPostActionWithId as unknown as UploadAction,
    initialState
  );

  const handleContentChange = (value: string) => {
    setContent(value);
    setIsChanged(true);
  };

  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const deleteResult = await deletePostAction({ postId: posts[0].id });
          if (!deleteResult.success) throw new Error("Failed to delete post");

          // Show success message
          Swal.fire({
            title: "Deleted!",
            text: "Your post has been deleted.",
            icon: "success",
          });

          router.push("/posts"); // Redirect after successful deletion
        } catch (err) {
          console.error("An error occurred while deleting the post: ", err);
          Swal.fire({
            title: "Error!",
            text: "An error occurred while deleting the post.",
            icon: "error",
          });
        }
      }
    });
  };

  const handleExport = useCallback(() => {
    const filename = `${posts[0].title || "blog-post"}.md`;

    const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [content, posts]);

  return (
    <form action={formAction} className="flex flex-col gap-2">
      <div className="flex sm-max:flex-col justify-between items-center border-b-2 border-gray-200/50 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
            📝 Edit your post
          </h2>
          <p className="text-gray-600">Start editing your blog post below...</p>
        </div>

        <div className="flex gap-4 sm-max:mt-5">
          <SubmitButton></SubmitButton>
          <Button
            onClick={handleExport}
            className="w-40 bg-gradient-to-r from-amber-900 to-amber-500 hover:from-amber-500 hover:to-amber-900 text-white font-semibold py-2 px-4 rounded-full shadow-lg transform transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
          >
            <Download className="w-5 h-5 mr-2" />
            Export
          </Button>

          <Button
            onClick={handleDelete}
            className="w-40 bg-gradient-to-r from-red-900 to-red-500 hover:from-red-500 hover:to-red-900 text-white font-semibold py-2 px-4 rounded-full shadow-lg transform transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            <Trash className="w-5 h-5 mr-2" />
            Delete Post
          </Button>
        </div>
      </div>
      <ForwardRefEditor
        markdown={posts[0].content}
        className="markdown-content border-dotted border-gray-200 border-2 p-4 rounded-md animate-in ease-in-out duration-75"
        onChange={handleContentChange}
      ></ForwardRefEditor>
    </form>
  );
}
