'use client'
import Link from 'next/link'
import {usePathname,useRouter} from 'next/navigation'
import {useEffect,useState,type ReactNode} from 'react'
import {AnimatePresence,motion,useReducedMotion} from 'framer-motion'
import type {SiteTemplatePageProps} from '../../../types'
import {useOfferSuiteHost} from '../host'
import {brand} from '../config/brand'
import '../theme.css'
export function useSite(props:SiteTemplatePageProps) {
  const locale=props.locale??'zh'
  const base=props.basePath.replace(/\/$/,'')
  return {locale,href:(slug='')=>(base||'')+(locale==='en'?'/en':'')+(slug?'/'+slug:'' )||'/'}
}
export function Shell({children,...props}:SiteTemplatePageProps&{children:ReactNode}) {
  const {locale,href}=useSite(props),host=useOfferSuiteHost(),pathname=usePathname(),router=useRouter(),reduced=useReducedMotion()
  const [menu,setMenu]=useState(false)
  const name=(host.brandName??brand.name)[locale]
  const nav=[['#experiences',locale==='zh'?'料理体验':'Experiences'],['about',locale==='zh'?'关于主理人':'About'],['journal',locale==='zh'?'手艺日志':'Journal'],['contact',locale==='zh'?'联系我们':'Contact us']]
  const switchLanguage=()=>{
    const base=props.basePath.replace(/\/$/,'')
    const relative=pathname.slice(base.length).replace(/^\/en(?=\/|$)/,'')
    router.push((base+(locale==='zh'?'/en':'')+relative||'/')+window.location.search+window.location.hash)
    setMenu(false)
  }
  useEffect(()=>{if(!menu)return;const close=(event:KeyboardEvent)=>{if(event.key==='Escape')setMenu(false)};document.addEventListener('keydown',close);return()=>document.removeEventListener('keydown',close)},[menu])
  return <div className="offersuite" lang={locale==='zh'?'zh-CN':'en'}>
    <a className="os-skip" href="#main">{locale==='zh'?'跳到正文':'Skip to content'}</a>
    <header className="os-header"><Link className="os-brand" href={href()} aria-label={name}>{host.logo?<img src={host.logo} alt="" />:<span className="os-monogram" aria-hidden>O</span>}<span>{name}</span></Link>
      <nav className="os-desktop" aria-label={locale==='zh'?'主导航':'Main navigation'}>{nav.map(([slug,label])=><Link key={slug} href={slug.startsWith('#')?href()+slug:href(slug)}>{label}</Link>)}</nav>
      <div className="os-header-actions"><button onClick={switchLanguage} aria-label={locale==='zh'?'Switch to English':'切换到中文'}>{locale==='zh'?'EN':'中文'}</button><button className="os-menu-toggle" aria-expanded={menu} aria-controls="os-mobile-menu" onClick={()=>setMenu(!menu)}>{menu?(locale==='zh'?'关闭':'Close'):(locale==='zh'?'菜单':'Menu')}<span aria-hidden>{menu?'−':'+'}</span></button></div>
    </header>
    <AnimatePresence>{menu&&<motion.nav id="os-mobile-menu" className="os-mobile-menu" initial={reduced?false:{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} aria-label={locale==='zh'?'手机导航':'Mobile navigation'}>{nav.map(([slug,label])=><Link key={slug} onClick={()=>setMenu(false)} href={slug.startsWith('#')?href()+slug:href(slug)}>{label}</Link>)}</motion.nav>}</AnimatePresence>
    <main id="main">{children}</main>
    <footer className="os-footer"><div><Link className="os-footer-brand" href={href()}>{name}</Link><p>{brand.tagline[locale]}</p></div><div className="os-footer-links"><div><p>{locale==='zh'?'探索':'Navigation'}</p>{nav.map(([slug,label])=><Link key={slug} href={slug.startsWith('#')?href()+slug:href(slug)}>{label}</Link>)}</div><div><p>{locale==='zh'?'关注':'Connect'}</p><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">Youtube</a><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></div><div><p>{locale==='zh'?'更多':'Extra'}</p><Link href={href('404')}>{locale==='zh'?'404 页面':'404 Error'}</Link><Link href={href('thank-you')}>{locale==='zh'?'致谢页面':'Thank you'}</Link><Link href={href('checkout')}>{locale==='zh'?'方案展示':'Plans'}</Link><Link href={href('legal/privacy-policy')}>{locale==='zh'?'隐私政策':'Privacy policy'}</Link><Link href={href('legal/terms-of-service')}>{locale==='zh'?'服务条款':'Terms of service'}</Link></div></div><div className="os-footer-bottom"><span>© {brand.year} {name}</span>{host.marketplaceHref&&<Link href={host.marketplaceHref}>{host.marketplaceLabel?.[locale]}</Link>}{host.filing}</div></footer>
    {host.marketplaceHref&&<Link className="os-marketplace" href={host.marketplaceHref} aria-label={host.marketplaceAriaLabel?.[locale]}>{host.lightLogo&&<img src={host.lightLogo} alt="" />}<span>{name}</span></Link>}
  </div>
}
