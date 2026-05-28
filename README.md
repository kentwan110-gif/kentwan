# Formosa Longevity Village 台湾康养长照项目

一个现代化的康养长照服务网站，展示专业的老年护理和健康管理解决方案。

## 🚀 快速开始

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 开发环境

```bash
npm run dev
# 或
yarn dev
```

打开 [http://localhost:3000](http://localhost:3000) 在浏览器中查看结果。

### 生产构建

```bash
npm run build
npm start
```

## 📁 项目结构

```
.
├── app/                    # Next.js 应用目录
│   ├── page.tsx           # 首页
│   ├── blog/              # 博客页面
│   ├── projects/          # 项目页面
│   ├── layout.tsx         # 主布局
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── Navigation.tsx     # 导航栏
│   ├── Hero.tsx           # 英雄部分
│   ├── Services.tsx       # 服务部分
│   ├── Features.tsx       # 特色部分
│   ├── Team.tsx           # 团队部分
│   ├── Testimonials.tsx   # 评价部分
│   ├── CTA.tsx            # 行动号召
│   └── Footer.tsx         # 页脚
├── public/                # 静态资源
├── package.json           # 项目依赖
├── tsconfig.json          # TypeScript 配置
├── next.config.js         # Next.js 配置
└── tailwind.config.js     # Tailwind CSS 配置
```

## 🎨 功能特性

- ✨ 现代化设计，以蓝色为主题
- 📱 完全响应式设计（移动端友好）
- ⚡ 快速加载，由 Next.js 提供支持
- 🎯 SEO 优化
- 🌙 易于定制和扩展
- 📝 博客系统
- 🏢 项目展示
- 👥 团队介绍
- 💬 用户评价

## 🛠️ 技术栈

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel 或 GitHub Pages

## 📝 自定义指南

### 修改品牌颜色

编辑 `tailwind.config.js` 中的 `primary` 颜色配置。

### 添加博客文章

1. 在 `app/blog/` 目录下创建新的动态路由
2. 使用 Markdown 或 MDX 格式编写内容

### 添加项目

编辑 `app/projects/page.tsx` 中的 `projects` 数组。

### 修改团队成员

编辑 `components/Team.tsx` 中的 `team` 数组。

## 📧 联系方式

- 邮箱: contact@formosalong.com
- 电话: +886 1234 56789
- 地址: 台湾 • 台北

## 📄 许可证

MIT

## 🙌 致谢

感谢所有为康养长照事业做出贡献的医护人员和工作者。
