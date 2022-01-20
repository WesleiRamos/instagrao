import { Avatar } from '../../Avatar'
import { StoriesWrapper } from './styles'

export type StorieUserType = {
  user: string,
  avatar: string,
}

type StoriesProps = {
  stories?: undefined | StorieUserType[],
}

export const Stories = (props: StoriesProps): JSX.Element => {
  /**
   *
   */
  const getStories = (): JSX.Element[] => {
    const stories = props.stories ?? []
    return stories.map(({ user, avatar }: StorieUserType, index: number) => (
      <div key={index} className="story">
        <Avatar avatar={avatar} size={56} hasStories />
        <p className="user"> {user}</p>
      </div>
    ))
  }
  
  return (
    <StoriesWrapper>
      <div>
        {getStories()}
      </div>
    </StoriesWrapper>
  )
}
