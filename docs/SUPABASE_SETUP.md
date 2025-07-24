# Supabase 设置指南

## 1. 创建 Supabase 项目

1. 访问 [Supabase](https://supabase.com) 并创建账户
2. 创建新项目，选择合适的区域（建议选择离用户最近的区域）
3. 等待项目初始化完成

## 2. 获取项目配置

在 Supabase 项目仪表板中：

1. 进入 **Settings** > **API**
2. 复制以下信息：
   - **Project URL** (用于 `NEXT_PUBLIC_SUPABASE_URL`)
   - **anon public** key (用于 `NEXT_PUBLIC_SUPABASE_ANON_KEY`)

## 3. 配置环境变量

1. 复制 `.env.local.example` 为 `.env.local`
2. 填入 Supabase 配置：

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

## 4. 创建数据库表

在 Supabase 项目仪表板中：

1. 进入 **SQL Editor**
2. 复制并执行 `supabase/migrations/001_create_waitlist_table.sql` 中的 SQL 代码
3. 或者使用 Supabase CLI：

```bash
# 安装 Supabase CLI
npm install -g supabase

# 登录 Supabase
supabase login

# 链接到你的项目
supabase link --project-ref your-project-id

# 运行迁移
supabase db push
```

## 5. 验证设置

1. 启动开发服务器：`npm run dev`
2. 访问等待列表页面
3. 尝试提交表单
4. 在 Supabase 仪表板的 **Table Editor** 中查看 `waitlist` 表是否有新数据

## 6. 数据库表结构

`waitlist` 表包含以下字段：

- `id`: UUID 主键，自动生成
- `email`: 邮箱地址，必填且唯一
- `name`: 姓名，可选
- `created_at`: 创建时间，自动生成
- `updated_at`: 更新时间，自动更新

## 7. 安全设置

- 已启用行级安全策略 (RLS)
- 匿名用户只能插入数据，不能查看其他用户数据
- 通过 API 端点提供统计数据

## 8. API 端点

- `POST /api/waitlist`: 添加到等待列表
- `GET /api/waitlist`: 获取等待列表统计数据

## 故障排除

### 常见问题

1. **连接错误**: 检查环境变量是否正确设置
2. **权限错误**: 确保 RLS 策略已正确配置
3. **重复邮箱**: API 会自动检查并返回相应错误信息

### 调试技巧

1. 在 Supabase 仪表板的 **Logs** 中查看实时日志
2. 使用浏览器开发者工具查看网络请求
3. 检查 Next.js 控制台输出