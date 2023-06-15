import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import styled from 'styled-components'
import { FontColors } from '../theme/Colors'
import { Post as PostProps } from '../types/Post'
import { ContentfulImage } from './ContentfulImage'
import markdownStyles from './markdown-styles.module.css'

const customMarkdownOptions = (content: PostProps['content']) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      return (
        <Embed>
          <ContentfulImage
            src={`${content.links.assets.block[0].url}`}
            title={node.data.target.sys.id}
            style={{ width: '100%', height: '100%', position: 'absolute' }}
            layout={'fill'}
          />
        </Embed>
      )
      // return <RichTextAsset id={node.data.target.sys.id} assets={content.links.assets.block} />
    },
  },
})

export const PostBody = (content: PostProps['content']) => {
  return (
    <TextWrapper className="max-w-2l mx-auto">
      <Text className={markdownStyles['markdown']} style={{ color: FontColors.Dark }}>
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
    font-family: 'Monserrat', cursive;
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

const Embed = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  height: 800px;
`
