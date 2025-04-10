
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  'https://tretsykvkjhscgbjukfv.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRyZXRzeWt2a2poc2NnYmp1a2Z2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyNzg4MTgsImV4cCI6MjA1OTg1NDgxOH0.tLofjzkQjO1CZx3glBl3KTp1AdDvvCwpaCeynfRfPrU',
  {
    auth: {
      storage: localStorage,
      persistSession: true,
      autoRefreshToken: true,
    }
  }
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
