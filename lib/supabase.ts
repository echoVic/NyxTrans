import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 等待列表数据类型
export interface WaitlistEntry {
  id?: string
  email: string
  name?: string
  created_at?: string
  updated_at?: string
}

// 添加到等待列表
export async function addToWaitlist(data: { email: string; name?: string }) {
  const { data: result, error } = await supabase
    .from('waitlist')
    .insert([
      {
        email: data.email,
        name: data.name || null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }
    ])
    .select()

  if (error) {
    throw error
  }

  return result
}

// 检查邮箱是否已存在
export async function checkEmailExists(email: string) {
  const { data, error } = await supabase
    .from('waitlist')
    .select('email')
    .eq('email', email)
    .single()

  if (error && error.code !== 'PGRST116') {
    throw error
  }

  return !!data
}

// 获取等待列表统计
export async function getWaitlistStats() {
  const { count, error } = await supabase
    .from('waitlist')
    .select('*', { count: 'exact', head: true })

  if (error) {
    throw error
  }

  return count || 0
}