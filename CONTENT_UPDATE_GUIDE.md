# TITANIUM 3DP 内容更新执行指南

本文件是 `titanium3dp.com` 后续新增、重写、合并或删除内容时的强制规范。开始内容工作前必须完整阅读。目标不是持续增加文章数量，而是提供可信的钛增材制造工程决策、采购与 RFQ 信息，同时保护既有 URL、站点结构和技术可信度。

## 1. 项目内容结构

| 内容类型                                                                   | 事实源                                                                           |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 工程文章/案例库内容                                                        | `src/data/post/*.md` 或 `*.mdx`；文件名就是 `/posts/{slug}/` 的 slug             |
| 首页、Applications、Capabilities、Materials、RFQ 等商业/聚合页             | `src/pages/`                                                                     |
| Grade 5、Grade 23 等独立材料页                                             | `src/pages/materials/`                                                           |
| 文章渲染、文章尾部工程决策路径、相关文章                                   | `src/components/blog/`，尤其 `SinglePost.astro` 与 `RelatedPosts.astro`          |
| 主导航和页脚                                                               | `src/navigation.ts`                                                              |
| 全局站点名、默认 metadata、语言、博客路径与 trailing slash                 | `src/config.yaml`                                                                |
| canonical、Breadcrumb、Article、Service、FAQ、ItemList 等 JSON-LD 帮助函数 | `src/utils/structured-data.ts` 及页面的 `metadata`                               |
| 钛站图片                                                                   | `src/assets/images/titanium/`                                                    |
| Sitemap                                                                    | `astro.config.ts` 中的 `@astrojs/sitemap` 自动生成；不要手写 `dist/sitemap*.xml` |
| 旧 URL 重定向                                                              | `public/_redirects`                                                              |

`dist/` 是构建产物，禁止直接编辑。`case-studies` hub、文章页、标签页、RSS 和 sitemap 都由内容集合/构建代码产生。

## 2. 选题优先级与去重

当前库存已有大量 `Titanium 3D Printing for X` 应用型文章，也已有材料选择、LPBF/EBM/DED、DfAM、成本、AM vs CNC、交期、内流道、疲劳、后处理、公差、检验和 RFQ 等核心主题。**不要恢复按行业名批量生产模板文章。**

新内容按以下顺序优先：

1. 有明确交易意图且尚未覆盖的材料或服务页；
2. 会改变工艺、成本、交期或验收方案的工程决策；
3. 常见失效、不可制造性、粉末清理、加工/检测盲区等问题；
4. 具有独特载荷、介质、温度、几何或合规边界的应用；
5. 纯趋势或泛行业介绍仅在能形成具体采购决策时考虑。

动笔前执行：

```powershell
rg -ni "目标主题|主要同义词|拟用 slug" src/data/post src/pages
```

并回答：目标读者正在做什么决策；新页相比现有页增加了什么证据或 RFQ 输出；是否更适合重写/合并已有 URL；读者能否判断适合性、风险、缺失证据和下一步 RFQ。

如果只是换行业或关键词，优先改写/合并已有页面。使用 Search Console 的页面和查询数据做月度判断；样本不足时不要仅凭零点击删除 URL，也不要用公开 `site:` 结果代替 GSC。现有基线见 `docs/gsc-baseline-2026-07-11.md`。

## 3. 钛牌号与材料声明边界

- TC4、Ti-6Al-4V、Grade 5、Ti64 可以指向同一广义合金家族，但不能自动视为同一个受控采购规范。内容应要求标准/客户规范、版本、化学成分、AM 路线、交付状态和验收证据。
- Ti-6Al-4V ELI / Grade 23 不是 Grade 5、锻件、植入物材料或任何已批准应用的自动替代品。
- TA1、TA2、CP Ti 和 Grade 1–4 不能混写成一个精确牌号。必须说明具体牌号、化学/氧含量边界、用途和供应商是否具有对应 AM 能力。
- 清楚区分粉末规范、打印件材料规范、锻造/轧制材料规范与客户图纸要求。不要把一种材料形态的数据移植到另一种形态。
- 不把“符合某材料标准”写成整件产品、医疗器械、航空零件、压力设备或监管用途已经获批。

任何化学成分、强度、延伸率、疲劳、断裂、腐蚀或温度数值都必须同时限定：材料规范及版本、成形工艺、方向、热处理/HIP 状态、表面/加工状态、试样还是实际零件、测试方法和来源。没有这些条件时，改用定性决策说明，不给“通用值”。

## 4. AM 工艺与工程数据边界

- LPBF、EBM、DED、CNC、锻造和混合制造不是可互换标签。比较时说明设备类别、几何尺度、支撑/粉末清理、热历史、加工余量、表面、检测和交付状态。
- 不发布通用的最小壁厚、孔径、悬垂角、公差、粗糙度、致密度、速度、成本或交期保证。给出数值时必须标注为设计起点/供应商能力窗口，并要求使用真实几何、方向、材料、后处理和检测方案确认。
- 计算成本时比较“可交付并验收的零件”，而不是仅比较打印时间或粉末单价；包括数据准备、支撑、热处理/HIP、线切割、加工、表面、检测、废品和文件。
- 内流道与封闭腔必须讨论粉末排出、清洗、可达性、CT/流量/泄漏验收，不能只强调几何自由度。
- 疲劳、安全关键和压力边界内容必须把表面、缺陷、方向、HIP、加工、无损检测、批次/见证件和设计许可放在同一证据链中。
- 任何“我们可以制造/检测/认证”的表述必须与当前真实设备、供应链和文件能力一致。能力尚未逐项确认时写成“可在 RFQ 中评估/由最终供应商确认”。

## 5. 标准、法规与高风险行业

- 优先引用标准组织、NIST、NASA、监管机构、政府实验室和同行评审研究。二手营销文章只能补充背景，不能支撑关键性能或合规结论。
- 写明标准名称、适用范围和版本/发布日期；发布前重新核对官方当前状态。不要大段复制受版权保护的标准表格，也不要把标准编号当装饰性关键词。
- 医疗相关内容不得声称生物相容、无菌、植入批准、患者适用或 FDA/其他监管许可，除非有针对该产品和流程的真实证据。材料规范不能替代设计控制、验证、清洗、灭菌和器械监管。
- 航空航天、国防、核能、氢能、油气、压力/低温系统内容不得暗示通用适航、军工资质、核级、氢兼容或压力认证。说明部件级、客户级和地区级资格仍需单独完成。
- 如果法规、标准或官方指南可能已经更新，先复核官方来源；正文明确“来源支持什么”和“它不支持什么”。

## 6. 案例真实性

- 只有具备可追溯项目记录、获准披露的材料/工艺/结果和真实验收证据时，才把内容写成已经发生的客户案例。
- 没有真实项目证据时，使用 “engineering guide”“application screening”“design scenario”“typical RFQ” 或条件式示例，不虚构客户、地点、产量、节省比例、试验结果、缺陷率或交期。
- 不用生成图或图库图冒充 CT、CMM、金相、拉伸、泄漏、疲劳或量产证据。概念图必须在 alt/caption 或上下文中明确其解释性角色。
- 客户名称、图纸、零件外形、检测报告、序列号和受控行业信息只有在书面许可后才可公开。

## 7. 推荐的工程文章结构

不要机械复制同一模板，但有价值的文章通常应覆盖：

1. 简短结论：什么情况下适合、不适合、条件式适合；
2. 决策表：比较工艺、材料或验收路径，而不是堆优点；
3. 关键输入：载荷、温度、介质、几何、数量、标准、交付状态；
4. 工艺链：打印、热处理/HIP、去支撑、加工、表面处理；
5. 失效与风险：为什么会失败、如何在报价前发现；
6. 检验与证据：CMM、CT、密度、见证件、拉伸、粗糙度、泄漏、COA/COC、追溯；
7. RFQ 清单：让采购能向多个供应商发出可比较的需求；
8. 来源与范围：说明引用支持的结论和文章不构成的保证；
9. 下一步：自然链接到材料、capabilities、RFQ 或紧密相关的工程页。

不要用空泛“轻量、高强、复杂几何”段落填充每个行业页；必须落到该场景独有的约束和验收方法。

## 8. 文章 frontmatter

新文章放在 `src/data/post/`。文件名使用稳定、简洁的英文 slug；发布后不要为关键词改名。推荐模板：

```yaml
---
title: '面向读者决策的唯一标题'
publishDate: 2026-07-15
updateDate: 2026-07-15
excerpt: '准确概括适用条件、比较维度和读者输出，避免夸张承诺。'
category: 'Case Studies'
tags: ['materials', 'lpbf', 'rfq']
author: 'TITANIUM 3DP Engineering'
# 只有确实有用的图片才保留 image；无图文章可删除此行
image: ~/assets/images/titanium/example.webp
metadata:
  title: '不重复站点模板的简洁搜索标题'
  description: '与正文一致的自然搜索摘要。'
  canonical: https://titanium3dp.com/posts/example-slug/
---
```

- `publishDate` 是首次公开日期，不因重写而改成今天。
- 只有实质更新正文、结论或技术证据时才修改 `updateDate`；拼写修正不刷新日期。
- canonical 必须是 HTTPS apex、与文件名一致并带尾斜杠。
- `title`、`excerpt`、metadata 与 H1 必须描述同一意图。避免每篇都使用相同前半句。
- tags 数量适中且复用现有规范术语；相关文章由 tags 和主题词自动计算，标签泛滥会降低相关推荐质量。
- `draft: true` 可用于尚未准备上线的文章；上线前删除或改为 `false`。

文章的 Breadcrumb、BlogPosting、日期、作者和图片 JSON-LD 会由文章页面自动生成，不要在 Markdown 正文再粘一份 JSON-LD。

## 9. URL、hub、内链与 JSON-LD

- 重写已有内容时保留文件名、公开 URL 和 canonical。不得因为改标题或年份就创建近似新 slug。
- 如果 URL 变更不可避免，先在 `public/_redirects` 添加明确的 `301`，再更新全部站内链接、canonical 和 sitemap；上线后同时验证旧 URL 和新 URL。
- `/case-studies/` 自动聚合文章；标签页默认 noindex。不要为每篇文章修改主导航，主导航只保留主要商业决策入口。
- 每篇文章已经在尾部统一链接 Materials、Grade 5、Capabilities 和 RFQ。正文只添加与当前段落直接相关的上下文链接，不再堆机械“相关文章”链接块。
- 商业/材料 landing page 使用 `src/utils/structured-data.ts` 中的帮助函数。Breadcrumb、FAQ、Service 和 ItemList 的每一项必须在可见页面中真实存在。
- 不创建虚假的 Review、AggregateRating、Offer、价格、库存或认证 schema。结构化数据不能超出正文和实际服务能力。
- 保持 `https://titanium3dp.com/sitemap-index.xml` 为唯一公开声明的 sitemap。`public/_redirects` 中 `/sitemap.xml -> /sitemap-index.xml 301` 的兼容跳转不能删除。

## 10. 图片规则

- 图片不是文章质量指标。每篇最多保留一张真正有解释价值的 Hero；没有合适图时可以无图发布。
- 图片放在 `src/assets/images/titanium/`，Markdown 使用 `~/assets/images/titanium/...`，让 Astro 生成响应式格式和尺寸。
- 优先使用真实且获授权的零件/工艺/检验证据。AI 生成图只能用于原理、路线或风险解释，不能伪装成真实设备能力或案例证据。
- alt 准确描述画面，不堆关键词；如果是示意图，正文或 caption 要说明。不能把概念图写成“通过 CT 验收的客户零件”。
- 不改动现有 Hero 的裁切、内容或整体设计，除非任务明确要求。不要添加 logo、客户标识、难以辨认的长文本或不可能的增材几何。
- 需要规划工程图时完整遵守 `docs/industrial-article-image-prompt-protocol.md`；图必须承担 evidence、explanation 或 data 角色。

## 11. 内容更新工作流

开始前：

```powershell
git status --short
git pull --ff-only
rg -ni "目标主题|主要同义词|拟用 slug" src/data/post src/pages
```

`git pull --ff-only` 只在工作树干净且任务允许同步远端时执行；有用户未提交改动时先保护并避开，不能覆盖。

完成编辑后必须运行：

```powershell
npm run check
npm run build
npx wrangler@4.111.0 deploy --dry-run
git diff --check
git status --short
```

如果只想先快速发现 Astro 内容/schema 问题，可以运行 `npm run check:astro`，但正式交付不能用它替代完整 `npm run check`。

本地查看生产构建：

```powershell
npm run preview -- --host 127.0.0.1 --port 4326
```

至少检查桌面和移动、深色和浅色主题，以及：标题/摘要、表格横向滚动、图片尺寸、上下文内链、文章尾部工程路径、相关文章、邮件/WhatsApp、RFQ CTA。

## 12. 构建与 SEO 验收

当前基线是 39 篇 Markdown 文章、sitemap 中 52 个 URL。新增一篇可索引文章通常会让 sitemap 增加一个 URL；重写不应改变 URL 数量。标签和分页页面被有意过滤，不能用 `dist/index.html` 数量与 sitemap 做一一比较。

```powershell
$postCount = (Get-ChildItem .\src\data\post -File | Where-Object { $_.Extension -in '.md','.mdx' }).Count
$sitemapCount = (Select-String -Path .\dist\sitemap-0.xml -Pattern '<url>' -AllMatches).Matches.Count
"posts=$postCount; sitemap URLs=$sitemapCount"
Get-Content .\dist\sitemap-index.xml
Get-Content .\dist\_redirects | Select-String '^/sitemap\.xml /sitemap-index\.xml 301$'
```

对本次修改 URL 做定点检查（替换示例 slug）：

```powershell
Select-String -Path .\dist\posts\example-slug\index.html -Pattern '<title>','rel="canonical"','application/ld\+json','dateModified'
Select-String -Path .\dist\sitemap-0.xml -Pattern 'https://titanium3dp.com/posts/example-slug/'
rg -n "example-slug|旧 slug" src
```

人工验收还必须确认：

- 一个页面只有一个清晰 H1，canonical 是 HTTPS apex 且带尾斜杠；
- 标题、description、正文、Article JSON-LD 与 sitemap 日期一致；
- 数值声明有条件、状态和来源，高风险应用有明确边界；
- 没有虚构案例、客户、测试、认证或设备能力；
- 内链推进读者下一步工程/RFQ 决策，没有孤儿页和重复近义页；
- `dist/sitemap-index.xml` 与 `dist/sitemap-0.xml` 均存在，旧 sitemap 301 仍在。

## 13. 上线与生产验收

只有在审核、提交、远端推送和生产部署均获授权后执行：

```powershell
git add <本次明确修改的文件>
git commit -m "Update <titanium topic> content"
git push origin main
npx wrangler@4.111.0 deploy
```

`4.111.0` 是本指南当前验证过的 Wrangler 版本；升级部署工具应作为单独改动完成 dry-run 和生产验收。如果 Cloudflare Git 集成是当前唯一部署链路，`git push` 即为部署触发器，不要再手动部署。

部署后验证基础设施与本次 URL：

```powershell
curl.exe -I https://titanium3dp.com/
curl.exe -I https://titanium3dp.com/posts/example-slug/
curl.exe -I https://titanium3dp.com/sitemap-index.xml
curl.exe -I https://titanium3dp.com/sitemap.xml
curl.exe -I https://www.titanium3dp.com/posts/example-slug/?source=check
curl.exe -I http://titanium3dp.com/posts/example-slug/?source=check
```

预期：新/更新页和 sitemap 为 `200`；旧 `/sitemap.xml` 为永久跳转到 `/sitemap-index.xml`；HTTP 与 www 单跳到 HTTPS apex，并保留路径与查询参数。再打开生产页面确认 canonical、JSON-LD、图片、CTA 与内部链接确实是新版本。

内容上线不需要修改 Cloudflare 的 TLS、HSTS、缓存或重定向规则。除非基础设施任务明确要求，否则不要为发布一篇文章调整这些设置。Google 抓取和 GSC 数据有延迟；记录上线日期，使用固定窗口按月比较非品牌曝光、点击、CTR、排名和真实 RFQ 行为，不承诺即时排名变化。
