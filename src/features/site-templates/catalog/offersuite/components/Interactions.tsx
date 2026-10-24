'use client'
import {useState} from 'react'
import {AnimatePresence,motion,useReducedMotion} from 'framer-motion'
import Link from 'next/link'
import type {TemplateLocale,SiteTemplatePageProps} from '../../../types'
import {faqs,testimonials} from '../content'
import {useSite} from './Shell'

export function FAQ({locale}:{locale:TemplateLocale}) {
  const [open,setOpen]=useState<number|null>(null),reduced=useReducedMotion()
  return <section className="os-section os-faq"><h2>{locale==='zh'?'常见问题':'Frequently Asked Questions'}</h2><div>{faqs.map(([q,a],i)=><div className="os-faq-item" key={q.en}><h3><button aria-expanded={open===i} aria-controls={'os-faq-'+i} onClick={()=>setOpen(open===i?null:i)}>{q[locale]}<span aria-hidden>{open===i?'−':'+'}</span></button></h3><AnimatePresence initial={false}>{open===i&&<motion.div id={'os-faq-'+i} initial={reduced?false:{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:0.35}}><p>{a[locale]}</p></motion.div>}</AnimatePresence></div>)}</div></section>
}
export {Gallery} from './Gallery'
export function Community({locale,images}:{locale:TemplateLocale;images:string[]}) {
  return <section className="os-section os-community"><h2>{locale==='zh'?'来自同桌伙伴的回响':'From the Community'}</h2><p>{locale==='zh'?'共同学习、做菜与共餐的片刻。以下为参考站示例评价。':'Reflections from guests who learned, cooked and shared the table. Example testimonials from the reference site.'}</p><div className="os-marquee" tabIndex={0} aria-label={locale==='zh'?'评价，悬停或聚焦暂停':'Testimonials, pause on hover or focus'}><div className="os-marquee-track">{[0,1].map(copy=><div className="os-marquee-group" key={copy} aria-hidden={copy===1?true:undefined}>{testimonials.map((t,i)=><blockquote className="os-glass" key={t.name}><p>“{t.body[locale]}”</p><cite><img className="os-avatar" src={images[i]} alt="" loading="lazy"/>{t.name}<small>{t.role[locale]}</small></cite></blockquote>)}</div>)}</div></div></section>
}
export function ApplicationForm(props:SiteTemplatePageProps&{title?:string;description?:string;primary?:boolean}) {
  const {locale,href}=useSite(props),[complete,setComplete]=useState(false),Heading=props.primary?'h1':'h2'
  return <section id="form" className="os-section os-application"><div><p className="os-eyebrow">{locale==='zh'?'一切从交谈开始':'A conversation begins here'}</p><Heading>{props.title??(locale==='zh'?'为你留一把椅子':'Apply for a seat')}</Heading><p>{props.description??(locale==='zh'?'告诉我们你正在做什么，以及想学习什么。':'Tell us about your practice and what you hope to learn.')}</p><p className="os-notice">{locale==='zh'?'演示表单：仅在本地校验，不发送、不保存任何信息。':'Demo form: local validation only. Nothing is sent or saved.'}</p></div><form onSubmit={event=>{event.preventDefault();setComplete(true)}} onChange={()=>setComplete(false)}>
    <label>{locale==='zh'?'你的姓名':'Your full name'}<input name="name" autoComplete="name" required minLength={2} maxLength={80} pattern=".*[^\s].*" /></label>
    <label>{locale==='zh'?'电子邮箱':'Your email'}<input name="email" type="email" autoComplete="email" required maxLength={160} /></label>
    <label>{locale==='zh'?'当前职业或实践方向':'Current role or practice'}<input name="role" required minLength={2} maxLength={120} pattern=".*[^\s].*" /></label>
    <label>{locale==='zh'?'你目前的技艺水平':'How would you describe your current skill level?'}<select name="level" required defaultValue=""><option value="" disabled>{locale==='zh'?'请选择':'Please select'}</option>{['Foundational','Intermediate','Advanced'].map((level,i)=><option key={level} value={level}>{locale==='zh'?['基础','中阶','进阶'][i]:level}</option>)}</select></label>
    <label>{locale==='zh'?'还有什么想让我们知道？':'Anything else we should know?'}<textarea name="message" rows={4} maxLength={2000} /></label>
    <label className="os-consent"><input name="consent" type="checkbox" required /><span>{locale==='zh'?'我已阅读演示':'I have read the demo '}<Link href={href('legal/terms-of-service')}>{locale==='zh'?'服务条款':'Terms of Service'}</Link>{locale==='zh'?'与':' and '}<Link href={href('legal/privacy-policy')}>{locale==='zh'?'隐私政策':'Privacy Policy'}</Link></span></label>
    <button className="os-button" type="submit">{locale==='zh'?'校验填写内容':'Validate application'}</button>
    {complete&&<p role="status" className="os-success">{locale==='zh'?'本地校验通过。信息未发送、未保存。':'Local validation passed. Nothing was sent or saved.'} <Link href={href('thank-you')}>{locale==='zh'?'查看演示致谢页':'View demo thank-you page'}</Link></p>}
  </form></section>
}
