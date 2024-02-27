'use client'
import { useRouter } from 'next/navigation'
import React from "react";

export default function Page() {
  const router = useRouter()

  return (
    <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
  )
}