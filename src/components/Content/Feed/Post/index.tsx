import { Avatar } from '../../../Avatar'
import { PostWrapper } from './styles'
import { HiDotsHorizontal } from 'react-icons/hi'
import { FiSend, FiMessageCircle, FiHeart, FiSmile } from 'react-icons/fi'

export type Media = {
  id: string,
  ext: string,
}

export type PostProps = {
  avatar: string,
  user: string,
  subtitle: string,
  media: Media,
  liked_by: string,
  comment_count: number,
  hasStories?: boolean,
  time_ago?: number
}

/**
 * 
 */
const mentionUsers = (text: string): string =>
  text.replace(/@[\w._-]*/g, (match: string) => `<a class="tag" href="#${match}">${match}</a>`)


/**
 * 
 */
const SaveIcon = (): JSX.Element => (
  <svg height="24" role="img" viewBox="0 0 24 24" width="24">
    <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon>
  </svg>
)

export const Post = ({ avatar, user, comment_count, subtitle, media, liked_by, hasStories = false, time_ago = 1 }: PostProps): JSX.Element => (
  <PostWrapper>
    <div className="top">
      <div className="user">
        <Avatar avatar={avatar} size={32} hasStories={hasStories} />
        <b>{user}</b>
      </div>

      <div className="options">
        <HiDotsHorizontal />
      </div>
    </div>

    <div className="content">
      <img src={`./media/${media.id}.${media.ext}`} />
    </div>

    <div className="bottom">
      <div className="actions">
        <div className="left">
          <FiHeart />
          <FiMessageCircle className="message-circle" />
          <FiSend />
        </div>

        <div className="right">
          <SaveIcon />
        </div>
      </div>

      <div className="post-info">
        <div>Curtido por <b>{liked_by}</b> e <b>outras pessoas</b></div>

        <div className="subtitle">
          <b>{user}</b> <span dangerouslySetInnerHTML={{__html:mentionUsers(subtitle)}}></span>
        </div>

        <p className="c-all-comments">Ver todos os {comment_count} comentários</p>
        <p className="time-ago">Há {time_ago} dia{time_ago > 1 ? 's' : ''}</p>
      </div>

      <div className="comment-box">
        <div><FiSmile /></div>
        <input type="text" placeholder="Adicione um comentário..." required />
        <button>Publicar</button>
      </div>
    </div>
  </PostWrapper>
)