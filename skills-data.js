// OpenClaw Skills Data
// Auto-generated - Last updated: 2026-03-30

const skillsData = [
    {
        name: "searxng",
        version: "1.0.3",
        emoji: "🔍",
        description: "使用本地 SearXNG 实例进行隐私保护的元搜索。无需外部 API 依赖即可搜索网页、图片、新闻等。",
        author: "Avinash Venkatswamy",
        homepage: "https://searxng.org",
        category: "搜索",
        features: ["隐私保护", "元搜索", "本地部署", "无 API 依赖"],
        triggers: ["search for", "search web", "find information", "look up"],
        requires: ["python3"]
    },
    {
        name: "find-skills",
        version: "0.1.0",
        emoji: "🔎",
        description: "帮助用户发现和安装 Agent 技能。当用户询问"如何做 X"或"寻找 X 的技能"时使用。",
        author: "OpenClaw Community",
        homepage: "https://skills.sh/",
        category: "工具",
        features: ["技能发现", "智能推荐", "CLI 集成"],
        triggers: ["find skill", "how to", "is there a skill"],
        requires: ["node", "npm"]
    },
    {
        name: "skill-vetter",
        version: "1.0.0",
        emoji: "🔒",
        description: "安全优先的技能审查工具。在安装任何技能前进行安全检查，识别危险模式。",
        author: "OpenClaw Security",
        homepage: "",
        category: "安全",
        features: ["安全审查", "代码检查", "风险评估", "红标检测"],
        triggers: ["vet skill", "check security", "review skill"],
        requires: []
    },
    {
        name: "agent-browser",
        version: "0.2.0",
        emoji: "🌐",
        description: "基于 Rust 的快速无头浏览器自动化 CLI，支持 Node.js 回退。可导航、点击、输入和捕获页面。",
        author: "Vercel Labs",
        homepage: "https://github.com/vercel-labs/agent-browser",
        category: "自动化",
        features: ["浏览器自动化", "Rust 驱动", "快速执行", "页面快照"],
        triggers: ["browser", "navigate", "click", "snapshot"],
        requires: ["node", "npm"]
    },
    {
        name: "self-improving-agent",
        version: "1.0.11",
        emoji: "📈",
        description: "捕获学习、错误和修正以实现持续改进。自动记录经验教训并提升到项目记忆中。",
        author: "Peter Skoett",
        homepage: "https://github.com/pskoett/pskoett-ai-skills",
        category: "自我改进",
        features: ["错误日志", "学习记录", "知识提升", "持续改进"],
        triggers: ["learn", "error", "correction", "improve"],
        requires: []
    },
    {
        name: "proactive-agent",
        version: "3.1.0",
        emoji: "🦞",
        description: "将 AI 代理从任务执行者转变为主动合作伙伴。包含 WAL 协议、工作缓冲区、自动定时任务和经过实战验证的模式。",
        author: "Hal Labs",
        homepage: "https://halstack.dev",
        category: "架构",
        features: ["主动代理", "WAL 协议", "工作缓冲", "自动定时任务", "自我改进"],
        triggers: ["proactive", "heartbeat", "cron", "check-in"],
        requires: []
    },
    {
        name: "github-pages-auto-deploy",
        version: "1.0.0",
        emoji: "🚀",
        description: "自动将网站部署到 GitHub Pages，支持自定义域名。推送代码即可自动构建和部署。",
        author: "uc (AI CEO)",
        homepage: "https://sendwealth.github.io/claw-intelligence/",
        category: "部署",
        features: ["自动部署", "自定义域名", "免费 HTTPS", "CDN 加速", "版本控制"],
        triggers: ["deploy", "github pages", "website"],
        requires: ["git"]
    }
];

const metadata = {
    totalCount: skillsData.length,
    lastUpdated: "2026-03-30 09:28",
    openclawVersion: "latest"
};
