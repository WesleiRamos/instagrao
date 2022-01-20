import Input from './Input'
import TopBarWrapper from './styles'
import { MdOutlineExplore } from 'react-icons/md'
import { Avatar } from '../Avatar'
import { useProfile } from '../../providers/profile'
import { FiHome, FiSend, FiPlusSquare, FiHeart } from 'react-icons/fi'

export const TopBar = (): JSX.Element => {
  const { avatar } = useProfile()

  return (
    <TopBarWrapper>
      <div>
        <div className="logo">
          <img src="./logo.svg" alt="Instagrao" />
        </div>
        
        <Input placeholder="Pesquisar" />

        <div className="icons">
          <FiHome size={25} />
          <FiSend size={25} />
          <FiPlusSquare size={25} />
          <MdOutlineExplore size={25} />
          <FiHeart size={25} />
          <Avatar avatar={avatar} size={32} />
        </div>
      </div>
    </TopBarWrapper>
  )
}