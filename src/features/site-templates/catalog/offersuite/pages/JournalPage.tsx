'use client'
import Link from 'next/link'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell,useSite} from '../components/Shell'
import {CardPhoto,Reveal,SplitText} from '../components/Motion'
import {articles} from '../content'
export default function JournalPage(props:SiteTemplatePageProps){const {locale,href}=useSite(props);return <Shell {...props}><section className="os-section"><div className="os-page-heading"><Reveal><p className="os-eyebrow">{locale==='zh'?'地方与手艺的记录':'Notes on place and craft'}</p><h1>{locale==='zh'?'手艺日志':'The Journal'}</h1></Reveal><p><SplitText text={locale==='zh'?'关于地方、耐心的手艺，以及我们在餐桌旁学到的事。':'Stories of place, patient craft, and the things we learn around a table.'}/></p></div><div className="os-journal-grid">{articles.map((article,i)=><Reveal delay={i%2*0.1} key={article.id}><Link className="os-journal-card" href={href('journal/'+article.id)}><CardPhoto src={article.image} alt={article.title[locale]} label={locale==='zh'?'阅读故事':'Read story'}/><h2>{article.title[locale]}</h2><p>{article.subtitle[locale]}</p></Link></Reveal>)}</div></section></Shell>}
