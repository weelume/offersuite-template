import test from 'node:test'
import assert from 'node:assert/strict'
import {readFile,access} from 'node:fs/promises'
const root=new URL('../',import.meta.url)
const data=JSON.parse(await readFile(new URL('src/features/site-templates/catalog/offersuite/content/data.json',root),'utf8'))
test('双语体验结构与素材存在',async()=>{assert.equal(data.experiences.length,6);for(const e of data.experiences){assert.equal(e.steps.length,5);for(const field of ['title','subtitle','intro','formTitle','formBody']){assert.ok(e[field].zh);assert.ok(e[field].en)}for(const image of e.images)await access(new URL('public'+image,root));for(const item of e.included){assert.ok(item.title.zh);assert.ok(item.body.zh)}}})
test('日志正文与政策路由完整',()=>{assert.equal(data.articles.length,6);for(const a of data.articles){assert.equal(a.blocks.length,3);for(const b of a.blocks){assert.ok(b.body.zh);assert.ok(b.body.en)}}})
