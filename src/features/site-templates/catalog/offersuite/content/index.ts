import data from './data.json'
export const { experiences, articles } = data
export type Bilingual = { zh: string; en: string }
export type Experience = typeof experiences[number]
export type Article = typeof articles[number]
export const homeLayers = ['4fxpbhm8ADPLyuQRoIh5io88DcY.webp', 'nTQyOBHDlAyBH3BaZmWl6kDbSIs.webp', '2p3E7DCXpzMSCoJf19dfvon4tY.webp'].map(name => '/templates/offersuite/images/' + name)
export const homeCards = ["/templates/offersuite/images/sSfuLKvqt3FqWFmDrFRBDifQIS0.webp","/templates/offersuite/images/FaD2E5Fn2V6nNc9ocGPopCVANUI.webp","/templates/offersuite/images/733gU4MVRiEDRDYcw0MmL3lnMfE.webp","/templates/offersuite/images/gJucbjtqLOKefw8bl755oPVgM.png","/templates/offersuite/images/ECCVvU0jIEyrbq7MMKp85xytQ4M.webp","/templates/offersuite/images/vZdgzpkU478bl4UpezEOcyApKC4.webp"]
export const press = ['5nwlyAHB2oiFLUcN2uVJOxEpsyo.png','EItxkYcFDdncSjk8I8IMXDOphWI.png','ucjzrLvIcq5wyZEYPxnsQ341g.png','JITa01Qg1afOsx9x1a23MDys6Eg.png','I4PyZYlOJWTAhTOnDHotWXpiVwY.png','omwSuXuoSOegnTLGjt2wDhMtkY.png'].map(name=>'/templates/offersuite/images/'+name)
export const faqs = [
  [{zh:'这些体验适合谁？',en:'Who is OfferSuite for?'},{zh:'适合愿意投入时间、亲手练习的厨师、餐饮经营者与认真对待料理的爱好者。每项体验有不同的学习重点。',en:'For chefs, food-business owners and committed home cooks who want to learn through practice. Each table has its own focus.'}],
  [{zh:'每次有多少人参加？',en:'How many people join each experience?'},{zh:'每桌最多八人，让每个人都能得到直接指导，也让交流保有深度。',en:'Each table is limited to eight people, allowing personal guidance and meaningful exchange.'}],
  [{zh:'费用包含什么？',en:'What is included?'},{zh:'各体验详情页分别列出课程、材料、餐食和住宿内容。真实行程与报价由主理人在申请通过后确认。',en:'Each experience lists its sessions, materials, meals and accommodation. The host confirms the final itinerary and price after approval.'}],
  [{zh:'需要专业料理经验吗？',en:'Do I need professional culinary experience?'},{zh:'不一定。我们更重视认真学习的意愿；共研项目则面向已有实际经营或厨房经验的人。',en:'Not always. Commitment to learning matters most; the mastermind is intended for those with an existing kitchen or food business.'}],
  [{zh:'课程使用什么语言？',en:'What language are the experiences conducted in?'},{zh:'示例活动以英语进行，地方技艺由当地导师讲解。参加真实活动前，请与主理人确认语言安排。',en:'The example experiences are conducted in English with local specialists. Confirm language arrangements with the host before attending.'}],
  [{zh:'如何申请？',en:'How does the application process work?'},{zh:'真实活动会由主理人阅读申请并联系合适的参与者。当前网站是演示，表单只在浏览器内校验，不发送、不保存。',en:'For a live experience the host reviews applications and contacts suitable participants. This demo validates in your browser only; nothing is sent or saved.'}],
]
export const testimonials = [
  {name:'Marta Bianchi',role:{zh:'主厨与餐厅经营者',en:'Chef & Restaurateur'},body:{zh:'与用一生打磨技艺的人并肩工作，是很难得的机会。我带走了更清晰的技法，也更尊重每一个细节。',en:'OfferSuite gives you the rare chance to work alongside people who have spent a lifetime refining their craft. I left with clearer technique and a respect for the details.'}},
  {name:'Rafael Cruz',role:{zh:'披萨主厨',en:'Pizza Chef'},body:{zh:'节奏安排恰到好处，有挑战，也留足消化的空间。这改变了我对自己厨房的理解。',en:'The days are beautifully paced: demanding enough to stretch you, generous enough to make every lesson stick. It changed how I approach my own kitchen.'}},
  {name:'Amelia Grant',role:{zh:'料理教育者',en:'Culinary Educator'},body:{zh:'这里不是围观演示。你参与、提问、重复练习，离开时对亲手学到的技艺充满信心。',en:'This is not a demonstration. You participate, ask questions, repeat the work, and leave with real confidence in what you have learned with the Maestro.'}},
  {name:'Lucas Moreau',role:{zh:'餐厅创始人',en:'Restaurant Founder'},body:{zh:'风景难忘，更有价值的是人与人的交流。每次谈话、纠正和共餐，都能感受到对细节的在意。',en:'The setting is unforgettable, but the real value is the access. Every conversation, correction, and shared table feels personal. They really care about the details.'}},
]
