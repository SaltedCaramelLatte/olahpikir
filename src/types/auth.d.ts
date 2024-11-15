// src/types/auth.d.ts
import { User as SupabaseUser } from '@supabase/supabase-js';

export type User = SupabaseUser;

export interface AuthContextType {
  user: User | null;
  signUp: (email: string, password: string) => Promise<User | null>;
  signIn: (email: string, password: string) => Promise<User | null>;
  signOut: () => Promise<void>;
}
