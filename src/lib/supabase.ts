
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  'https://your-project-url.supabase.co',
  'your-anon-key'
)

// Helper functions for authentication
export const signInWithEmail = async (email: string, password: string) => {
  return await supabase.auth.signInWithPassword({ email, password })
}

export const signUpWithEmail = async (email: string, password: string) => {
  return await supabase.auth.signUp({ email, password })
}

export const signInWithOAuth = async (provider: 'google' | 'twitter') => {
  return await supabase.auth.signInWithOAuth({ provider })
}

export const signInWithPhone = async (phone: string) => {
  return await supabase.auth.signInWithOtp({ phone })
}

export const signOut = async () => {
  return await supabase.auth.signOut()
}
