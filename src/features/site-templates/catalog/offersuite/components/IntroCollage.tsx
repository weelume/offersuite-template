'use client'
import {useRef} from 'react'
import {motion,useReducedMotion,useScroll,useTransform,type MotionValue} from 'framer-motion'
function Photo({src,index,progress}:{src:string;index:number;progress:MotionValue<number>}){const reduced=useReducedMotion(),y=useTransform(progress,[0,1],[index%2?-45:55,index%2?45:-55]),rotate=useTransform(progress,[0,1],[index%2?-9:8,index%2?5:-5]);return <motion.img className={'os-collage-photo os-collage-'+index} src={src} alt="" loading="lazy" style={{y:reduced?0:y,rotate:reduced?0:rotate}}/>}
export function IntroCollage({images,text}:{images:string[];text:string}){const ref=useRef<HTMLElement>(null),{scrollYProgress}=useScroll({target:ref,offset:['start end','end start']});return <section ref={ref} className="os-intro-collage">{images.map((src,index)=><Photo src={src} key={src} index={index} progress={scrollYProgress}/>)}<p>{text}</p></section>}
