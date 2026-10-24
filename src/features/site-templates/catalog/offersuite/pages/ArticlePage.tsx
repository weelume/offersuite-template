'use client'
import Link from 'next/link'
import {notFound} from 'next/navigation'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell,useSite} from '../components/Shell'
import {ParallaxImage,Reveal} from '../components/Motion'
import {articles} from '../content'
export default function ArticlePage(props:SiteTemplatePageProps&{id:string}){const {locale,href}=useSite(props),index=articles.findIndex(a=>a.id===props.id),article=articles[index];if(!article)notFound();return <Shell {...props}><article><header className="os-section os-article-heading"><Reveal><Link className="os-eyebrow" href={href('journal')}>{locale==='zh'?'手艺日志':'OfferSuite Journal'}</Link><h1>{article.title[locale]}</h1><p>{article.subtitle[locale]}</p><small>{locale==='zh'?new Intl.DateTimeFormat('zh-CN',{dateStyle:'long'}).format(new Date(article.date+' 12:00:00')):article.date} · {locale==='zh'?'阅读约 2 分钟':'2 min read'}</small></Reveal></header><ParallaxImage className="os-article-cover" src={article.image} alt={article.title[locale]}/><div className="os-article-body">{article.blocks.map((block,i)=><Reveal key={i}>{block.title&&<h2>{block.title[locale]}</h2>}<p>{block.body[locale]}</p></Reveal>)}</div><nav className="os-section os-article-nav" aria-label={locale==='zh'?'文章翻页':'Story navigation'}>{[index-1,index+1].filter(i=>i>=0&&i<articles.length).map(i=><Link href={href('journal/'+articles[i].id)} key={i}><small>{locale==='zh'?(i<index?'上一篇':'下一篇'):(i<index?'Previous story':'Next story')}</small><h3>{articles[i].title[locale]}</h3></Link>)}</nav></article></Shell>}
