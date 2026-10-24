'use client'
import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'

const ease = [0.12, 0.23, 0.17, 0.99] as const
export function Reveal({children,className='',delay=0}:{children:ReactNode;className?:string;delay?:number}) {
  const reduced=useReducedMotion()
  return <motion.div className={className} initial={reduced?false:{y:24,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true,amount:0.12}} transition={{duration:0.8,delay,ease}}>{children}</motion.div>
}
export function SplitText({text}:{text:string}) {
  const reduced=useReducedMotion()
  // 两种语言均按字符错峰；用单词外壳避免英文在字母中间换行，读屏只读取完整句子。
  const groups=Array.from(text.matchAll(/\p{Script=Han}|[^\p{Script=Han}\s]+|\s+/gu),match=>match[0])
  let offset=0
  return <span aria-label={text}>{groups.map((group,index)=>{const letters=Array.from(group),start=offset;offset+=letters.length;return <span aria-hidden key={index} style={{display:'inline-block',whiteSpace:'pre'}}>{letters.map((letter,i)=><motion.span key={i} style={{display:'inline-block',whiteSpace:'pre'}} initial={reduced?false:{opacity:0,y:12,filter:'blur(5px)'}} animate={{opacity:1,y:0,filter:'blur(0px)'}} transition={{delay:0.35+(start+i)*0.018,duration:0.7,ease}}>{letter}</motion.span>)}</span>})}</span>
}
export function ParallaxImage({src,alt='',className=''}:{src:string;alt?:string;className?:string}) {
  const ref=useRef<HTMLDivElement>(null), reduced=useReducedMotion()
  const {scrollYProgress}=useScroll({target:ref,offset:['start end','end start']})
  const y=useTransform(scrollYProgress,[0,1],['-10%','10%'])
  return <div ref={ref} className={'os-parallax '+className}><motion.img src={src} alt={alt} style={{y:reduced?0:y}} /></div>
}
export function HeroScene({layers,children}:{layers:string[];children:ReactNode}) {
  const reduced=useReducedMotion(),x=useMotionValue(0),y=useMotionValue(0)
  const sx=useSpring(x,{stiffness:80,damping:22}),sy=useSpring(y,{stiffness:80,damping:22})
  const x1=useTransform(sx,v=>v*0.25),y1=useTransform(sy,v=>v*0.25)
  const x2=useTransform(sx,v=>v*0.55),y2=useTransform(sy,v=>v*0.55)
  return <section className="os-hero" onPointerMove={event=>{if(reduced||event.pointerType!=='mouse')return;const r=event.currentTarget.getBoundingClientRect();x.set((event.clientX-r.left-r.width/2)/r.width*34);y.set((event.clientY-r.top-r.height/2)/r.height*24)}} onPointerLeave={()=>{x.set(0);y.set(0)}}>
    <div className="os-scene" aria-hidden>{layers.map((src,i)=><motion.img key={src} src={src} alt="" style={{x:reduced?0:i===0?x1:i===1?x2:sx,y:reduced?0:i===0?y1:i===1?y2:sy,zIndex:i}} />)}</div>
    <div className="os-hero-shade" /><div className="os-hero-copy">{children}</div>
  </section>
}
export function CardPhoto({src,alt,label,status}:{src:string;alt:string;label:string;status?:string}) {
  const reduced=useReducedMotion(),x=useMotionValue(0),y=useMotionValue(0)
  const sx=useSpring(x,{stiffness:160,damping:24}),sy=useSpring(y,{stiffness:160,damping:24})
  return <div className="os-card-photo" onPointerMove={event=>{if(reduced||event.pointerType!=='mouse')return;const rect=event.currentTarget.getBoundingClientRect();x.set(event.clientX-rect.left);y.set(event.clientY-rect.top)}}>
    <img src={src} alt={alt} loading="lazy"/>{status&&<span className="os-status">{status}</span>}
    <motion.span aria-hidden className="os-card-view" style={reduced?undefined:{left:0,top:0,x:sx,y:sy}}>{label}</motion.span>
  </div>
}
