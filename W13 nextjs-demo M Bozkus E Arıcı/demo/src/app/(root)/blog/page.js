"use client"

import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

export default function BlogPage() {
  return (
    <div>
      <button onClick={() => { notFound() }}>giit</button>
    </div>
  )
}
