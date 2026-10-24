'use client'
import Link from 'next/link'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell,useSite} from '../components/Shell'
import {Reveal,SplitText} from '../components/Motion'
export default function UtilityPage(props:SiteTemplatePageProps&{kind:'404'|'thank-you'}){const {locale,href}=useSite(props),thanks=props.kind==='thank-you';return <Shell {...props}><section className="os-utility"><Reveal><p className="os-eyebrow">OfferSuite</p><h1>{thanks?(locale==='zh'?'谢谢你的用心':'Thank you.'):'404'}</h1><p><SplitText text={thanks?(locale==='zh'?'这是演示致谢页。表单仅完成本地校验，信息未发送、未保存，也未产生真实申请。':'This is a demo thank-you page. The form only validates locally; no data was sent or saved and no application was created.'):(locale==='zh'?'这一页暂时不在餐桌上。它可能已经移动，或不再开放。':'This page isn’t available. It may have moved, or the access no longer exists.')}/></p><Link className="os-button" href={href()}>{locale==='zh'?'返回首页':'Back to home'}</Link></Reveal></section></Shell>}
