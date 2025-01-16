import React from 'react'


export default function PostCard({ post }) {
  return (
    <div>
      <article className="max-w-4xl mx-auto p-6">
        <div className="border-b border-gray-200 pb-8">
          <div className="mb-4 flex items-center gap-2">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
              Post #{post.id}
            </span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-500 text-sm">User ID: {post.userId}</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>

          <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
            {post.body}
          </p>
        </div>
      </article>
    </div>
  )
}
