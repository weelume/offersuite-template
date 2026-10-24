'use client'
import {useEffect,useRef,useState} from 'react'
import {motion,useMotionValue,useReducedMotion,useSpring} from 'framer-motion'

/** 原站的圆形指针仅用于鼠标；触控、表单输入和减少动态效果时保留原生指针。 */
export function Cursor(){
  const reduced=useReducedMotion(),[active,setActive]=useState(false),entered=useRef(false)
  const x=useMotionValue(0),y=useMotionValue(0),sx=useSpring(x,{stiffness:800,damping:45}),sy=useSpring(y,{stiffness:800,damping:45})
  useEffect(()=>{
    if(reduced)return
    const hide=()=>{entered.current=false;setActive(false)}
    const move=(event:PointerEvent)=>{
      const target=event.target instanceof Element?event.target:null
      if(event.pointerType!=='mouse'||!target?.closest('.offersuite')){hide();return}
      x.set(event.clientX);y.set(event.clientY)
      if(!entered.current){sx.jump(event.clientX);sy.jump(event.clientY);entered.current=true;setActive(true)}
    }
    document.addEventListener('pointermove',move)
    document.addEventListener('pointerleave',hide)
    window.addEventListener('blur',hide)
    return()=>{document.removeEventListener('pointermove',move);document.removeEventListener('pointerleave',hide);window.removeEventListener('blur',hide)}
  },[reduced,x,y,sx,sy])
  return active&&!reduced?<div className="os-cursor-layer" aria-hidden><motion.div className="os-cursor os-cursor-active" style={{x:sx,y:sy}}/></div>:null
}
