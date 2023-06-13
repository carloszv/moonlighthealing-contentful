import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import styled from 'styled-components'
import { FontColors } from '../theme/Colors'
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
      <Text className={markdownStyles['markdown']} style={{ color: FontColors.Tertiary }}>
        {documentToReactComponents(content.json, customMarkdownOptions(content))}
      </Text>
    </TextWrapper>
  )
}

const TextWrapper = styled.div`
  text-align: justify;
  width: 80%;
`

const Text = styled.div`
  h1,
  h2,
  h3 {
    text-align: center;
    font-weight: 400;
    font-family: 'Great Vibes', cursive;
  }

  h1 {
    font-size: 48px;
  }

  ul {
    list-style: initial;
    margin-left: 24px;
  }

  ol {
    list-style: auto;
    margin-left: 24px;
  }

  p {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`
