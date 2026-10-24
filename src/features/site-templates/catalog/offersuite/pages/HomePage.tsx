'use client'
import Link from 'next/link'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell,useSite} from '../components/Shell'
import {CardPhoto,HeroScene,Reveal,SplitText} from '../components/Motion'
import {experiences,homeLayers,homeCards,press} from '../content'
export default function HomePage(props:SiteTemplatePageProps) {
  const {locale,href}=useSite(props)
  return <Shell {...props}><HeroScene layers={homeLayers}><Reveal><p className="os-eyebrow">{locale==='zh'?'风土与手艺':'Taste & Territory'}</p><h1>{locale==='zh'?<>一张餐桌<br/>一方风土</>:'Taste & Territory'}</h1></Reveal><p className="os-hero-subtitle"><SplitText text={locale==='zh'?'Giulia Ferretti 每次只教八个人，一年走过五个地方。每个席位，源于认真相待。':'Chef Giulia Ferretti teaches eight people at a time, across five regions a year. Every seat is earned, not booked.'}/></p><Link className="os-button os-button-light" href={href()+'#experiences'}>{locale==='zh'?'探索料理体验':'View Experiences'}</Link></HeroScene>
    <section className="os-press"><p>{locale==='zh'?'被这些声音提及':'Where this has been mentioned:'}</p><div>{press.map((src,i)=><img src={src} alt={['Vogue','Travel + Leisure','Condé Nast Traveller','Forbes','The New York Times','Food & Wine'][i]} key={src} loading="lazy"/>)}</div></section>
    <section className="os-section" id="experiences"><Reveal className="os-section-heading"><p className="os-eyebrow">{locale==='zh'?'循着味道，走进地方':'Experiences'}</p><h2>{locale==='zh'?<>五方风土<br/>同一份坚持</>:<>Five regions.<br/>One standard.</>}</h2><p>{locale==='zh'?'每张餐桌都有不同的学问，每一次相遇都值得认真以待。':'Every table teaches something different. None of them are easier to get into.'}</p></Reveal><div className="os-experience-grid">{experiences.map((experience,i)=><Reveal key={experience.id} delay={(i%3)*0.08}><Link className="os-experience-card" href={href('experiences/'+experience.id)}><CardPhoto src={homeCards[i]} alt={experience.region[locale]} status={experience.status[locale]} label={locale==='zh'?'查看体验':'Explore'}/><div className="os-card-copy"><h3>{experience.region[locale]}</h3><p>{experience.duration[locale]}</p></div></Link></Reveal>)}</div></section>
    <section className="os-closing"><Reveal><p className="os-eyebrow">{locale==='zh'?'手把手，在同一张桌旁':'Hand to hand. At the same table.'}</p><h2>{locale==='zh'?'有些手艺，只能用它原本的方式传下去':'Some things can only be taught the way they’ve always been taught: hand to hand, at the same table.'}</h2><Link className="os-button os-button-light" href={href('contact')}>{locale==='zh'?'从一次交谈开始':'Start a Conversation'}</Link></Reveal></section>
  </Shell>
}
