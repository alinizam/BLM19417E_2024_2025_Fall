"use server"

export async function getPost(id) {
  // assume that this section has critical server-side code that should not be exposed to the client
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = await response.json()
  return post
}