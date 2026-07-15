# Repository Instructions

任何新增、重写、合并、迁移或删除站点内容的任务，开始前必须完整阅读并执行根目录的 `CONTENT_UPDATE_GUIDE.md`，同时参考 `HANDOFF.md` 中仍有效的设计与业务边界。

- 工程文章的事实源是 `src/data/post/`，商业/材料页在 `src/pages/`；禁止直接编辑 `dist/`、sitemap 构建产物或线上成品。
- 必须核验钛牌号、AM 工艺、力学数据、标准/合规边界与案例真实性。不得虚构客户、测试、性能、认证或能力。
- 优先重写/合并重叠库存，保留现有 URL、canonical、hub、结构化数据、工程内链和 RFQ 路径，不批量制造应用近义页。
- 内容改动后必须执行指南中的完整 `npm run check`、构建、sitemap、旧 sitemap 跳转和 Cloudflare dry-run 验收。
- 保持现有工业极简设计、图片策略、邮件与 WhatsApp 行为。未获得明确授权时，不得提交、推送或部署。
