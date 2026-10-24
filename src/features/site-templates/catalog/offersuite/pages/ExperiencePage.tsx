'use client'
import Link from 'next/link'
import {notFound} from 'next/navigation'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell,useSite} from '../components/Shell'
import {HeroScene,Reveal,SplitText,ParallaxImage} from '../components/Motion'
import {ApplicationForm,Community,FAQ,Gallery} from '../components/Interactions'
import {experiences} from '../content'
import {IntroCollage} from '../components/IntroCollage'
export default function ExperiencePage(props:SiteTemplatePageProps&{id:string}) {
  const {locale,href}=useSite(props),experience=experiences.find(e=>e.id===props.id)
  if(!experience)notFound()
  return <Shell {...props}><HeroScene layers={experience.images.slice(0,3)}><Reveal><p className="os-eyebrow">{experience.region[locale]} · {experience.status[locale]}</p><h1>{experience.title[locale]}</h1></Reveal><p className="os-hero-subtitle"><SplitText text={experience.subtitle[locale]}/></p><Link className="os-button os-button-light" href={href('experiences/'+experience.id)+'#form'}>{locale==='zh'?(experience.id==='rome'||experience.id==='dolomites'||experience.id==='lake-como'?'加入候补名单':'申请邀请'):(experience.id==='rome'||experience.id==='dolomites'||experience.id==='lake-como'?'Join the Waitlist':'Request an Invitation')}</Link></HeroScene>
    <IntroCollage images={experience.visuals.intro} text={experience.intro[locale]}/>
    <section className="os-section os-schedule"><Reveal className="os-section-heading"><h2>{experience.scheduleTitle[locale]}</h2><p>{experience.scheduleSubtitle[locale]}</p></Reveal><div className="os-steps">{experience.steps.map((step,i)=><Reveal className="os-step" key={step.title.en}><span className="os-step-number">{String(i+1).padStart(3,'0')}</span><div><h3>{step.title[locale]}</h3><p>{step.body[locale]}</p></div><ParallaxImage src={experience.visuals.steps[i]} alt={step.title[locale]}/></Reveal>)}</div></section>
    <Gallery images={experience.visuals.gallery} locale={locale}/>
    <section className="os-section os-included"><h2>{locale==='zh'?'体验包含':'What’s Included'}</h2><div>{experience.included.map((item,i)=><Reveal className="os-glass" key={item.title.en}><img className="os-included-art" src={experience.visuals.included[i]} alt="" loading="lazy"/><h3>{item.title[locale]}</h3><p>{item.body[locale]}</p></Reveal>)}</div></section>
    <section className="os-section os-location"><div><Reveal><p className="os-eyebrow">{locale==='zh'?'地方，也是老师':'A sense of place'}</p><h2>{experience.locationTitle[locale]}</h2><p>{experience.locationSubtitle[locale]}</p></Reveal><div className="os-location-copy"><p>{experience.location[locale]}</p><p>{experience.locationBody[locale]}</p></div></div><div className="os-location-images">{experience.visuals.location.map(src=><ParallaxImage key={src} src={src} alt={experience.region[locale]}/>)}</div></section>
    <Community locale={locale} images={experience.visuals.testimonials}/><FAQ locale={locale}/><ApplicationForm {...props} title={experience.formTitle[locale]} description={experience.formBody[locale]}/>
  </Shell>
}
