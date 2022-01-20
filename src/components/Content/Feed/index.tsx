import { FeedWrapper } from './styles'
import { Post, PostProps } from './Post'

export type PostType = PostProps

export type FeedProps = {
  posts: PostType[]
}

export const Feed = ({ posts }: FeedProps): JSX.Element => {
  /**
   * 
   */
  const getPosts = (): JSX.Element[] => posts.map((post, index) => (
    <Post key={index} {...post} />
  ))
  
  return (
    <FeedWrapper>
      {getPosts()}
    </FeedWrapper>
  )
}
