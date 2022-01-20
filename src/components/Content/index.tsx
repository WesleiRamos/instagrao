import ContentWrapper from './styles'
import { useState, useEffect } from 'react'
import { Feed, PostType } from './Feed'
import { Stories, StorieUserType } from './Stories'
import { Suggestions, SuggestionUserType } from './Suggestions'

const POSTS_URL = 'https://api.instagrao.com/posts'
const STORIES_URL = 'https://api.instagrao.com/stories'
const SUGGESTIONS_URL = 'https://api.instagrao.com/suggestions'

export const Content = (): JSX.Element => {
  const [ postList, setPostList ] = useState<PostType[]>([])
  const [ storiesList, setStoriesList ] = useState<StorieUserType[]>([])
  const [ suggestionsList, setSuggestionsList ] = useState<SuggestionUserType[]>([])

  useEffect(() => {
    setPostList(window.request(POSTS_URL))
    setStoriesList(window.request(STORIES_URL))
    setSuggestionsList(window.request(SUGGESTIONS_URL))
  }, [])

  return (
    <ContentWrapper>
      <div>
        <Stories stories={storiesList} />
        <Feed posts={postList} />
      </div>

      <div>
        <Suggestions suggestions={suggestionsList} />
      </div>
    </ContentWrapper>
  )
}
