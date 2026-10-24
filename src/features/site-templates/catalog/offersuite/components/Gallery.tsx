'use client'
import {useEffect,useRef,useState} from 'react'
import {motion,useAnimationFrame,useMotionValue,useReducedMotion} from 'framer-motion'
import type {TemplateLocale} from '../../../types'

function GalleryRow({images,reverse,locale}:{images:string[];reverse:boolean;locale:TemplateLocale}){
  const ref=useRef<HTMLDivElement>(null),group=useRef<HTMLDivElement>(null),x=useMotionValue(0),width=useRef(0),dragging=useRef(false),reduced=useReducedMotion()
  const [paused,setPaused]=useState(false)
  useEffect(()=>{const element=group.current;if(!element)return;const observer=new ResizeObserver(()=>{width.current=element.getBoundingClientRect().width});observer.observe(element);width.current=element.getBoundingClientRect().width;return()=>observer.disconnect()},[])
  // 两份等宽内容首尾衔接；拖拽与自动播放共用位移，释放后从当前位置继续。
  useAnimationFrame((_time,delta)=>{if(reduced||paused||dragging.current||width.current===0)return;const next=x.get()+(reverse?1:-1)*Math.min(delta,50)*0.035;x.set(((next%width.current)+width.current)%width.current-width.current)})
  return <div ref={ref} className="os-gallery-row" tabIndex={0} role="region" aria-label={locale==='zh'?'可拖动的料理图库':'Draggable culinary gallery'} onPointerEnter={()=>setPaused(true)} onPointerLeave={()=>setPaused(false)} onFocus={()=>setPaused(true)} onBlur={()=>setPaused(false)} onKeyDown={event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();const next=x.get()+(event.key==='ArrowLeft'?353:-353);if(width.current)x.set(((next%width.current)+width.current)%width.current-width.current)}}}>
    <motion.div className="os-gallery-loop" style={{x:reduced?0:x}} drag={reduced?false:'x'} dragMomentum={false} onDragStart={()=>{dragging.current=true}} onDragEnd={()=>{dragging.current=false}}>
      {[0,1].map(copy=><div className="os-gallery-group" ref={copy===0?group:undefined} key={copy} aria-hidden={copy===1?true:undefined}>{images.map((src,i)=><img src={src} key={src} draggable="false" loading="lazy" alt={locale==='zh'?'料理体验场景 '+(i+1):'Culinary experience '+(i+1)}/>)}</div>)}
    </motion.div>
  </div>
}
export function Gallery({images,locale}:{images:string[];locale:TemplateLocale}){const middle=Math.ceil(images.length/2);return <section className="os-gallery-pair" aria-label={locale==='zh'?'在场的片刻':'Moments at the table'}><p>{locale==='zh'?'拖动浏览，悬停或聚焦暂停':'Drag to explore. Hover or focus to pause.'}</p><GalleryRow images={images.slice(0,middle)} reverse={false} locale={locale}/><GalleryRow images={images.slice(middle)} reverse locale={locale}/></section>}
