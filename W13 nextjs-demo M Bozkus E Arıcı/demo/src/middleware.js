import { NextRequest, NextResponse } from "next/server"

// Limit the middleware to paths starting with `/api/`
export const config = {
  matcher: ['/api/:function*'],
}

export async function middleware(request) {
  const isUsernameValid = request.headers.get('username') === 'mtcn'
  if (!isUsernameValid) {
    // Respond with JSON indicating an error message
    return NextResponse.json(
      { success: false, message: 'Username is wrong' },
      { status: 401 }
    )
  }
}
