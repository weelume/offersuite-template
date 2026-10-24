'use client'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell,useSite} from '../components/Shell'
import {ApplicationForm} from '../components/Interactions'
export default function ContactPage(props:SiteTemplatePageProps){const {locale}=useSite(props);return <Shell {...props}><ApplicationForm {...props} primary title={locale==='zh'?'从一次交谈开始':'Start a conversation'} description={locale==='zh'?'关于手艺、地方，以及你下一步想走的路。告诉我们你的想法。':'About craft, place, and where your practice might go next. Tell us what is on your mind.'}/></Shell>}
