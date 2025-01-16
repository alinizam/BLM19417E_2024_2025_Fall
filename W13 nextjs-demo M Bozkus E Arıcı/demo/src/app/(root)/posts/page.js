"use client"

import PostList from '@/components/PostList'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Post() {
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredPosts, setFilteredPosts] = useState([])

  useEffect(() => {
    if (data) setFilteredPosts(data)
  }, [data])

  const searchPost = () => {
    if (searchQuery) {
      setFilteredPosts(data.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase())))
    } else {
      setFilteredPosts(data)
    }
  }

  return (
    <div>
      <div className='flex gap-4'>
        <Input className="w-72" type="text" placeholder="Search from our posts" onChange={(event) => { setSearchQuery(event.target.value) }} />
        <Button onClick={() => { searchPost() }}>Search</Button>
      </div>

      <h1 className='mt-12'>Our posts:</h1>
      {error && <p>Failed to load posts</p>}
      {isLoading && <p>Loading posts...</p>}
      {(filteredPosts.length === 0 && searchQuery) && <p>No posts found</p>}
      <PostList posts={filteredPosts} />
    </div>
  )
}
