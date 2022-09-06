import { Document } from '@contentful/rich-text-types'

export type Content = { json: Document; links: { assets: { block: Array<any> } } }
