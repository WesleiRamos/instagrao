import { AvatarWrapper } from './styles'

type AvatarProps = {
  avatar: string,
  size?: number,
  hasStories?: boolean
}

export const Avatar = ({ avatar, hasStories, size }: AvatarProps): JSX.Element => (
  <AvatarWrapper size={size} hasStories={hasStories} >
    <img src={`./avatars/${avatar}.png`} />
  </AvatarWrapper>
)