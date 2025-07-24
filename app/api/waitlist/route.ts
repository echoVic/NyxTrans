import { addToWaitlist, checkEmailExists } from '@/lib/supabase'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const waitlistSchema = z.object({
  email: z.string().email('请输入有效的邮箱地址'),
  name: z.string().min(2, '姓名至少需要2个字符').optional()
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // 验证输入数据
    const validatedData = waitlistSchema.parse(body)
    
    // 检查邮箱是否已存在
    const emailExists = await checkEmailExists(validatedData.email)
    if (emailExists) {
      return NextResponse.json(
        { error: '该邮箱已在等待列表中' },
        { status: 400 }
      )
    }
    
    // 添加到等待列表
    const result = await addToWaitlist(validatedData)
    
    return NextResponse.json(
      { 
        message: '成功加入等待列表',
        data: result 
      },
      { status: 201 }
    )
    
  } catch (error) {
    console.error('等待列表提交错误:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: '输入数据格式错误', details: error.errors },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: '服务器内部错误' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const { getWaitlistStats } = await import('@/lib/supabase')
    const count = await getWaitlistStats()
    
    return NextResponse.json({ count })
  } catch (error) {
    console.error('获取等待列表统计错误:', error)
    return NextResponse.json(
      { error: '无法获取统计数据' },
      { status: 500 }
    )
  }
}