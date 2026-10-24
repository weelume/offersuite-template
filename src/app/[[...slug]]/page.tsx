import {notFound} from 'next/navigation'
import {offersuiteTemplate} from '../../features/site-templates/catalog/offersuite/meta'
export default async function Page({params}:{params:Promise<{slug?:string[]}>}){const {slug=[]}=await params;const locale=slug[0]==='en'?'en':'zh';const path=(locale==='en'?slug.slice(1):slug).join('/');const page=offersuiteTemplate.surfaces[0].pages.find(p=>p.slug===path);if(!page)notFound();const {default:Component}=await page.load();return <Component locale={locale} basePath=""/>}
