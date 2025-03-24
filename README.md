# JoyFun.space - 在线游戏门户

这是一个基于Next.js的在线游戏门户网站，允许用户直接在浏览器中玩各种游戏。游戏通过iframe嵌入并按类别组织。

## 特性

- 适用于桌面和移动设备的响应式设计
- SEO优化的内容结构
- 受苹果设计启发的UI设计，使用Tailwind CSS实现
- 游戏分类和筛选功能
- 简洁现代的界面

## 开始使用

### 前提条件

- Node.js 14.x或更高版本
- npm或yarn

### 安装

1. 克隆仓库：
```bash
git clone https://github.com/w346489584/joyfun.git
cd joyfun
```

2. 安装依赖：
```bash
npm install
# 或
yarn install
```

3. 运行开发服务器：
```bash
npm run dev
# 或
yarn dev
```

4. 用浏览器打开[http://localhost:3000](http://localhost:3000)查看结果。

## 项目结构

- `/src/pages` - 所有页面组件，包括游戏详情页
- `/src/components` - 可复用的React组件
- `/src/styles` - 全局样式和Tailwind配置
- `/public` - 静态资源，包括嵌入的游戏

## 部署

该项目可以部署到Vercel或任何其他兼容Next.js的托管服务：

```bash
npm run build
# 或
yarn build
```

## 技术栈

- [Next.js](https://nextjs.org/) - 用于生产环境的React框架
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的CSS框架
- [React](https://reactjs.org/) - 用户界面JavaScript库

## 许可证

本项目采用MIT许可证 - 详情请查看LICENSE文件。

## 致谢

- 所有游戏均为其各自所有者的财产，并已获得嵌入许可。
- 感谢苹果设计系统的灵感。 