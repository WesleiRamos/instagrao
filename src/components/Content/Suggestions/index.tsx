import { Suggestion } from './Suggestion'
import { SuggestionsWrapper } from './styles'
import { useProfile } from '../../../providers/profile'

export type SuggestionUserType = {
  username: string,
  avatar: string,
}

type SuggestionsProps = {
  suggestions?: undefined | SuggestionUserType[],
}

const links: string[] = [
  'Sobre', 'Ajuda', 'Imprensa', 'API', 'Carreiras', 'Privacidade',
  'Termos', 'Localizações', 'Principais contas', 'Hashtags', 'Idioma'
]

export const Suggestions = (props: SuggestionsProps): JSX.Element => {
  const { avatar, username, firstName, lastName } = useProfile()

  /**
   * 
   */
  const getSuggestions = (): JSX.Element[] => {
    const suggestions = props.suggestions ?? []
    return suggestions.map((suggestion: SuggestionUserType, index: number): JSX.Element => (
      <Suggestion
        key={index}
        avatar={suggestion.avatar}
        firstInfo={suggestion.username}
        secondInfo='Novo no Instagrão' />
    ))
  }

  return (
    <SuggestionsWrapper>
      <Suggestion
        avatar={avatar}
        size={56}
        firstInfo={username}
        secondInfo={`${firstName} ${lastName}`}
        linkTitle="Mudar" />

      <div className="title">
        <span>Sugestões para você</span>
        <a href="#">Ver tudo</a>
      </div>

      <div className="suggestions">
        {getSuggestions()}
      </div>

      <div className="footer">
        {links.map((link: string, index: number): JSX.Element => (
          <a key={index} href="#">{link}</a>
        ))}

        <p>&copy; {new Date().getUTCFullYear()} instagrão from bota</p>
      </div>
    </SuggestionsWrapper>
  )
}