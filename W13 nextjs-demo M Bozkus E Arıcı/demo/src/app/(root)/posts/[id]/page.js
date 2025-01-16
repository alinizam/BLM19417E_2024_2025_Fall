import PostCard from "@/components/PostCard"
import { getPost } from "@/lib/actions"
import Link from "next/link"

export async function generateMetadata({ params }, parent) {
  const id = (await params).id
  const post = await getPost(id)

  return {
    title: post.title,
  }
}

export default async function Page({ params }) {
  console.log("This is a server-side function")

  const id = (await params).id
  const post = await getPost(id)

  return <div>
    <div>
      <Link href="/posts">
        <h3 className="text-blue-500 hover:underline">← Back to posts</h3>
      </Link>
      <PostCard post={post} />
    </div>
  </div>
}