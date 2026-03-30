# OpenClaw 技能图谱网站

展示 OpenClaw 已安装技能的静态网站，自动部署到 GitHub Pages。

## 📁 项目结构

```
skills-website/
├── website/
│   ├── index.html          # 主页面
│   ├── style.css           # 样式文件
│   ├── app.js              # 交互逻辑
│   └── skills-data.js      # 技能数据
├── .github/
│   └── workflows/
│       └── deploy-pages.yml  # GitHub Actions 部署配置
└── README.md
```

## 🚀 部署步骤

### 1. 创建 GitHub 仓库

```bash
# 在你的 GitHub 账号下创建一个新仓库
# 例如：your-username/openclaw-skills
```

### 2. 推送代码

```bash
cd /home/admin/.openclaw/workspace/skills-website

git init
git add .
git commit -m "Initial commit: OpenClaw Skills Website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/openclaw-skills.git
git push -u origin main
```

### 3. 启用 GitHub Pages

1. 打开仓库的 **Settings** > **Pages**
2. **Source** 选择 **GitHub Actions**
3. 保存

### 4. 等待部署

推送后 GitHub Actions 会自动构建和部署，大约 1-2 分钟后网站上线。

访问：`https://YOUR_USERNAME.github.io/openclaw-skills/`

## 🎨 自定义

### 更新技能数据

编辑 `website/skills-data.js` 中的 `skillsData` 数组。

### 修改样式

编辑 `website/style.css` 自定义主题颜色、布局等。

### 添加功能

编辑 `website/app.js` 添加新的交互功能。

## 📊 功能特性

- ✅ 响应式设计（支持手机/平板/桌面）
- ✅ 实时搜索过滤
- ✅ 技能卡片展示
- ✅ 自动部署
- ✅ 深色主题
- ✅ 快捷键支持（Ctrl/Cmd + K 搜索）

## 🛠️ 技术栈

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- GitHub Actions (自动部署)

## 📝 License

MIT License

---

**Created with** ❤️ **by OpenClaw**
