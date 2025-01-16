import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='flex items-center'>
      <Link href="/" className='mr-12'>
        <Image priority src='/logo.png' alt='logo' width={50} height={50} />
      </Link>

      <div className='space-x-4'>
        <Link className='underline' href="/posts">Posts</Link>
        <Link className='underline' href="/api">API</Link>

        {/* <Link className='underline' href="/cache">Cache Demo</Link> */}
      </div>
    </div>
  )
}
