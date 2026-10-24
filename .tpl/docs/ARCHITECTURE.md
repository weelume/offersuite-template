# 架构

品牌配置 config/brand.ts；双语内容 content/；集中主题 theme.css；交互组件 components/；页面组合 pages/；meta.ts 注册路由。host.tsx 暴露可选品牌与页脚注入，不依赖任何具体消费方。src/app 是独立 Next.js 路由壳，通用包只导出 template 与 host。运行素材在 public/templates/offersuite，展示图应存 .tpl/assets。
