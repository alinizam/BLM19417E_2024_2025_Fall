import { cookies, headers } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request) {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  const headersList = await headers()

  // console.log(token);

  // headersList.forEach((value, key) => {
  //   console.log(`${key}: ${value}`)
  // })

  return NextResponse.json({ "message": "Hello, Next.js!" })
}

