# OfferSuite 料理体验模板

21 页中英文响应式官网，包含六种地域体验、主理人故事、日志与六篇文章、联系申请、方案展示、政策、404 与演示致谢。

工具链：Node 24.16.0、pnpm 9.15.4，Next.js、React、TypeScript 与 Framer Motion。

安装：`pnpm install --frozen-lockfile`。开发：`pnpm dev`，默认 http://127.0.0.1:43360；英文路径 /en。生产：`pnpm build` 后 `pnpm start`。终端 Ctrl+C 停止。端口通过 PORT 调整，不关闭其他进程。

检查：`pnpm typecheck`、`pnpm lint`、`pnpm test`、`pnpm build`。`.tpl/project.json` 定义操作与副作用，读取资料不会自动执行。当前 stage=ready：已提供三端真实截图与浏览器布局检查。参考站逐项动效比对尚未完全完成，不能作为完整复刻验收。

没有后端、数据库、真实申请、邮件或支付。表单只在当前页面内校验，不发送、不保存。方案价格是参考站演示内容。运行素材本地托管。

修改入口：config/brand.ts（品牌）、content/（双语数据）、theme.css（主题与断点）、components/（动效与共享交互）、pages/（页面组合）、meta.ts（页面注册）。均位于 src/features/site-templates/catalog/offersuite。增删页面需同步 meta.ts 与 .tpl/template.json。

交付前检查源码、依赖锁、规则、素材和验收记录；不提交 node_modules、缓存、日志、真实配置。素材权利见 .tpl/docs/LICENSE.md。当前不应公开上架或商用。
