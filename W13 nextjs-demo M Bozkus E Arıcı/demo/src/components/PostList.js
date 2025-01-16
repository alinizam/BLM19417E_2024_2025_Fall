import Link from 'next/link'
import React from 'react'

export default function PostList({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <Link href={`/posts/${post.id}`} key={post.id}>
          <div className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
              <span className="text-sm text-gray-500">Post #{post.id}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">User ID: <span className="font-medium">{post.userId}</span></span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">View Post</span>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}
