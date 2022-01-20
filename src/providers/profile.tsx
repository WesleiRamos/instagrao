import { createContext, useState, useContext } from 'react'

type ProfileContextType = {
  username: string,
  avatar: string,
  firstName: string,
  lastName: string
}

type ProfileProviderProps = {
  children?: JSX.Element | JSX.Element[]
}

const DEFAULT_VALUE = {
  username: 'cj.agaraga',
  avatar: '01',
  firstName: 'Cidinei',
  lastName: 'Jonsom'
}

export const ProfileContext = createContext<ProfileContextType>(DEFAULT_VALUE);

/**
 * 
 * @returns 
 */
export const ProfileProvider = ({ children = [] }: ProfileProviderProps): JSX.Element => {
  const [ profile ] = useState<ProfileContextType>(DEFAULT_VALUE);
  return (
    <ProfileContext.Provider value={profile}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext<ProfileContextType>(ProfileContext)