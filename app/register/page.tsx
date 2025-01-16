'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle registration logic here
    console.log('Registration attempt with:', { name, email, password })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="bg-card shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
          <div className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <Button type="submit">Register</Button>
            <Link href="/login" className="text-sm text-primary hover:underline">
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
