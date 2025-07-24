-- 创建等待列表表
CREATE TABLE IF NOT EXISTS waitlist (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建索引以提高查询性能
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at);

-- 添加行级安全策略 (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- 允许匿名用户插入数据（用于注册等待列表）
CREATE POLICY "Allow anonymous insert" ON waitlist
    FOR INSERT 
    TO anon 
    WITH CHECK (true);

-- 允许匿名用户查看统计数据（不包含个人信息）
CREATE POLICY "Allow anonymous select count" ON waitlist
    FOR SELECT 
    TO anon 
    USING (false); -- 这里设为 false，因为我们会通过 API 提供统计数据

-- 创建更新时间的触发器函数
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 创建触发器
CREATE TRIGGER update_waitlist_updated_at 
    BEFORE UPDATE ON waitlist 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- 插入一些示例数据（可选）
-- INSERT INTO waitlist (email, name) VALUES 
-- ('test@example.com', '测试用户'),
-- ('demo@example.com', '演示用户');