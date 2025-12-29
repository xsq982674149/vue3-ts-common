# OMS - Vue Vben Admin

基于 Vue 3 + TypeScript + Vite 的企业级中后台管理系统，采用 Monorepo 架构设计。

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Vue 3.5+ |
| 语言 | TypeScript 5.8+ |
| 构建工具 | Vite 6 |
| 包管理 | pnpm 10 (Monorepo) |
| 任务编排 | Turborepo |
| UI 组件库 | Element Plus |
| 状态管理 | Pinia 3 |
| 路由 | Vue Router 4 |
| CSS 框架 | TailwindCSS 3 |
| 国际化 | Vue I18n |
| HTTP 客户端 | Axios |
| 代码规范 | ESLint + Prettier + Stylelint |
| Git 规范 | Commitlint + Lefthook |

## 项目结构

```
├── apps/                          # 应用层
│   └── web-ele/                   # Element Plus 版本应用
│       ├── src/
│       │   ├── adapter/           # 适配器
│       │   ├── api/               # API 接口
│       │   ├── layouts/           # 布局组件
│       │   ├── locales/           # 国际化资源
│       │   ├── router/            # 路由配置
│       │   ├── store/             # 状态管理
│       │   └── views/             # 页面视图
│       └── ...
│
├── packages/                      # 核心包
│   ├── @core/                     # 基础 SDK 和 UI 组件库（无业务逻辑）
│   │   ├── base/                  # 基础设计、图标、共享模块、类型定义
│   │   ├── composables/           # 通用组合式函数
│   │   ├── preferences/           # 偏好设置核心
│   │   └── ui-kit/                # UI 组件套件
│   │       ├── form-ui/           # 表单组件
│   │       ├── layout-ui/         # 布局组件
│   │       ├── menu-ui/           # 菜单组件
│   │       ├── popup-ui/          # 弹窗组件
│   │       ├── shadcn-ui/         # Shadcn 风格组件
│   │       └── tabs-ui/           # 标签页组件
│   │
│   ├── effects/                   # 副作用层（轻微耦合业务逻辑）
│   │   ├── access/                # 权限控制
│   │   ├── common-ui/             # 通用 UI 组件
│   │   ├── hooks/                 # 业务 Hooks
│   │   ├── layouts/               # 布局系统
│   │   ├── plugins/               # 插件系统
│   │   └── request/               # 请求封装
│   │
│   ├── constants/                 # 常量定义
│   ├── icons/                     # 图标资源
│   ├── locales/                   # 国际化
│   ├── preferences/               # 用户偏好
│   ├── stores/                    # 全局状态
│   ├── styles/                    # 样式资源
│   ├── types/                     # 类型定义
│   └── utils/                     # 工具函数
│
├── internal/                      # 内部工具配置
│   ├── lint-configs/              # 代码规范配置
│   │   ├── commitlint-config/     # Git 提交规范
│   │   ├── eslint-config/         # ESLint 配置
│   │   ├── prettier-config/       # Prettier 配置
│   │   └── stylelint-config/      # Stylelint 配置
│   ├── node-utils/                # Node.js 工具函数
│   ├── tailwind-config/           # TailwindCSS 配置
│   ├── tsconfig/                  # TypeScript 配置
│   └── vite-config/               # Vite 配置
│
└── scripts/                       # 脚本工具
```

## 分层架构

```
┌─────────────────────────────────────────────────────────────┐
│                        apps (应用层)                         │
│                    具体业务应用实现                           │
├─────────────────────────────────────────────────────────────┤
│                    packages/effects                          │
│           副作用层：状态管理、路由、API、权限等                 │
├─────────────────────────────────────────────────────────────┤
│                    packages/*                                │
│        通用层：工具函数、类型、常量、样式、国际化等              │
├─────────────────────────────────────────────────────────────┤
│                    packages/@core                            │
│              核心层：基础 SDK、UI 组件库（无业务）              │
├─────────────────────────────────────────────────────────────┤
│                      internal                                │
│              基础设施：构建配置、代码规范、工具                  │
└─────────────────────────────────────────────────────────────┘
```

## 快速开始

### 环境要求

- Node.js >= 20.10.0
- pnpm >= 9.12.0

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

### 构建生产版本

```bash
pnpm build
```

