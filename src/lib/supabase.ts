
import { createClient } from '@supabase/supabase-js'

// Get the current window location to use for redirects
const getBaseUrl = () => {
  // In production, use the current window location
  if (typeof window !== 'undefined') {
    const url = new URL(window.location.href);
    return `${url.protocol}//${url.host}`;
  }
  // Fallback for SSR or if window is not available
  return 'https://f8c40855-f94e-40e2-8218-b9c2fe3155ea.lovableproject.com';
};

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  'https://tretsykvkjhscgbjukfv.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRyZXRzeWt2a2poc2NnYmp1a2Z2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyNzg4MTgsImV4cCI6MjA1OTg1NDgxOH0.tLofjzkQjO1CZx3glBl3KTp1AdDvvCwpaCeynfRfPrU',
  {
    auth: {
      storage: localStorage,
      persistSession: true,
      autoRefreshToken: true,
      // Set the redirect URL to the current domain
      redirectTo: `${getBaseUrl()}/`,
    }
  }
)

// Helper functions for authentication
export const signInWithEmail = async (email: string, password: string) => {
  return await supabase.auth.signInWithPassword({ email, password })
}

export const signUpWithEmail = async (email: string, password: string) => {
  return await supabase.auth.signUp({ 
    email, 
    password,
    options: {
      // Make sure to use the current domain for email confirmation
      emailRedirectTo: `${getBaseUrl()}/`,
    }
  })
}

export const signInWithOAuth = async (provider: 'google' | 'twitter') => {
  return await supabase.auth.signInWithOAuth({ 
    provider,
    options: {
      redirectTo: `${getBaseUrl()}/`,
    }
  })
}

export const signInWithPhone = async (phone: string) => {
  return await supabase.auth.signInWithOtp({ phone })
}

export const signOut = async () => {
  return await supabase.auth.signOut()
}
