import type {SiteTemplate} from '../../types'
export const offersuiteTemplate:SiteTemplate={...{
  "id": "offersuite",
"gitUrl":"https://github.com/weelume/offersuite-template",
  "name": "OfferSuite · 意大利料理体验",
  "localizedNames": {
    "en": "OfferSuite · Private culinary journeys"
  },
  "sceneId": "corporate-site",
  "listed": false,
  "tags": [
    "料理体验",
    "邀请制",
    "意大利风土",
    "分层视差",
    "中英文",
    "PC / iPad / H5"
  ],
  "summary": "21 页料理体验官网：6 类地方体验、6 篇手艺日志、主理人故事、FAQ、候补申请与方案演示。",
  "accentColor": "#48503e",
  "cover": "/templates/offersuite/screenshots/desktop-home.webp",
  "screenshots": [{"src":"/templates/offersuite/screenshots/desktop-home.webp","alt":"OfferSuite desktop home","device":"desktop","width":1440,"height":1000},{"src":"/templates/offersuite/screenshots/desktop-experience.webp","alt":"OfferSuite desktop experience","device":"desktop","width":1440,"height":1000},{"src":"/templates/offersuite/screenshots/desktop-journal.webp","alt":"OfferSuite desktop journal","device":"desktop","width":1440,"height":1000},{"src":"/templates/offersuite/screenshots/desktop-contact.webp","alt":"OfferSuite desktop contact","device":"desktop","width":1440,"height":1000},{"src":"/templates/offersuite/screenshots/tablet-home.webp","alt":"OfferSuite tablet home","device":"tablet","width":834,"height":1180},{"src":"/templates/offersuite/screenshots/tablet-experience.webp","alt":"OfferSuite tablet experience","device":"tablet","width":834,"height":1180},{"src":"/templates/offersuite/screenshots/tablet-journal.webp","alt":"OfferSuite tablet journal","device":"tablet","width":834,"height":1180},{"src":"/templates/offersuite/screenshots/tablet-contact.webp","alt":"OfferSuite tablet contact","device":"tablet","width":834,"height":1180},{"src":"/templates/offersuite/screenshots/mobile-home.webp","alt":"OfferSuite mobile home","device":"mobile","width":390,"height":844},{"src":"/templates/offersuite/screenshots/mobile-experience.webp","alt":"OfferSuite mobile experience","device":"mobile","width":390,"height":844},{"src":"/templates/offersuite/screenshots/mobile-journal.webp","alt":"OfferSuite mobile journal","device":"mobile","width":390,"height":844},{"src":"/templates/offersuite/screenshots/mobile-contact.webp","alt":"OfferSuite mobile contact","device":"mobile","width":390,"height":844}]
},surfaces:[{id:'site',name:'料理体验官网',platform:'pc',locales:['zh','en'],pages:[
{slug:"",title:"首页",localizedTitles:{en:"Home"},load:()=>import('./pages/HomePage')},
{slug:"about",title:"关于主理人",localizedTitles:{en:"About"},load:()=>import('./pages/AboutPage')},
{slug:"journal",title:"手艺日志",localizedTitles:{en:"Journal"},load:()=>import('./pages/JournalPage')},
{slug:"contact",title:"联系与申请",localizedTitles:{en:"Contact"},load:()=>import('./pages/ContactPage')},
{slug:"checkout",title:"方案展示",localizedTitles:{en:"Plans"},load:()=>import('./pages/CheckoutPage')},
{slug:"404",title:"页面未找到",localizedTitles:{en:"Page not found"},load:()=>import('./pages/NotFoundPage')},
{slug:"thank-you",title:"演示致谢",localizedTitles:{en:"Thank you"},load:()=>import('./pages/ThankYouPage')},
{slug:"legal/privacy-policy",title:"隐私政策",localizedTitles:{en:"Privacy Policy"},load:()=>import('./pages/PrivacyPage')},
{slug:"legal/terms-of-service",title:"服务条款",localizedTitles:{en:"Terms of Service"},load:()=>import('./pages/TermsPage')},
{slug:"experiences/lake-como",title:"长桌共研",localizedTitles:{en:"The Long Table"},load:()=>import('./pages/LakeComoPage')},
{slug:"experiences/venice",title:"潟湖之席",localizedTitles:{en:"The Lagoon Table"},load:()=>import('./pages/VenicePage')},
{slug:"experiences/tuscany",title:"托斯卡纳之席",localizedTitles:{en:"The Tuscan Table"},load:()=>import('./pages/TuscanyPage')},
{slug:"experiences/naples",title:"那不勒斯之席",localizedTitles:{en:"The Neapolitan Table"},load:()=>import('./pages/NaplesPage')},
{slug:"experiences/rome",title:"四种意面",localizedTitles:{en:"The Four Pasta"},load:()=>import('./pages/RomePage')},
{slug:"experiences/dolomites",title:"阿尔卑斯之席",localizedTitles:{en:"The Alpine Table"},load:()=>import('./pages/DolomitesPage')},
{slug:"journal/what-a-tuscan-table-teaches",title:"托斯卡纳餐桌教会我们的事",localizedTitles:{en:"What a Tuscan table teaches"},load:()=>import('./pages/WhatATuscanTableTeachesPage')},
{slug:"journal/learning-to-cook-with-the-lagoon",title:"跟随潟湖学做菜",localizedTitles:{en:"Learning to cook with the lagoon"},load:()=>import('./pages/LearningToCookWithTheLagoonPage')},
{slug:"journal/four-pastas-a-thousand-decisions",title:"四种意面，一千个决定",localizedTitles:{en:"Four pastas, a thousand decisions"},load:()=>import('./pages/FourPastasAThousandDecisionsPage')},
{slug:"journal/the-pleasure-of-a-longer-lunch",title:"一顿悠长午餐的乐趣",localizedTitles:{en:"The pleasure of a longer lunch"},load:()=>import('./pages/ThePleasureOfALongerLunchPage')},
{slug:"journal/a-kitchen-between-the-mountains",title:"群山之间的厨房",localizedTitles:{en:"A kitchen between the mountains"},load:()=>import('./pages/AKitchenBetweenTheMountainsPage')},
{slug:"journal/dough-rewards-your-attention",title:"面团会回报你的专注",localizedTitles:{en:"Dough rewards your attention"},load:()=>import('./pages/DoughRewardsYourAttentionPage')}]}]}
