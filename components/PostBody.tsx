import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import styled from 'styled-components'
import { Post as PostProps } from '../types/Post'
import markdownStyles from './markdown-styles.module.css'
import RichTextAsset from './rich-text-asset'

const customMarkdownOptions = (content: PostProps['content']) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => (
      <RichTextAsset id={node.data.target.sys.id} assets={content.links.assets.block} />
    ),
  },
})

export const PostBody = (content: PostProps['content']) => {
  return (
    <TextWrapper className="max-w-2l mx-auto">
      <div className={markdownStyles['markdown']}>
        {documentToReactComponents(content.json, customMarkdownOptions(content))}
      </div>
    </TextWrapper>
  )
}

const TextWrapper = styled.div`
  text-align: justify;
`
