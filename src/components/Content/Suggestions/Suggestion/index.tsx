import { Avatar } from '../../../Avatar'
import { SuggestionWrapper } from './styles'

type SuggestionProps = {
  firstInfo: string,
  secondInfo: string,
  avatar: string,
  size?: number | undefined,
  linkTitle?: string | undefined
}

export const Suggestion = ({ firstInfo, secondInfo, avatar, size = 32, linkTitle = 'Seguir' }: SuggestionProps): JSX.Element => {
  return (
    <SuggestionWrapper size={size}>
      <Avatar size={size} avatar={avatar} />
      <div className="information">
        <p>{firstInfo}</p>
        <p>{secondInfo}</p>
      </div>

      <a href="#">{linkTitle}</a>
    </SuggestionWrapper>
  );
}