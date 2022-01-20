import { useState } from 'react'
import InputWrapper from './styles'
import { FiSearch, FiXCircle } from 'react-icons/fi'

type InputWrapperProps = {
  width?: number,
  value?: string,
  type?: string,
  placeholder?: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export default (props: InputWrapperProps): JSX.Element => {
  const [ isFocused, setIsFocused ] = useState(false)
  
  /**
   * @returns {void}
   */
  const setFocus = (value: boolean) => (): void =>
    setIsFocused(value)

  /**
   * @returns {JSX.Element | null}
   */
  const getPreIcon = (): JSX.Element | null => 
    isFocused ? null : <FiSearch />

  /**
   * @returns {JSX.Element | null}
   */
  const getSufIcon = (): JSX.Element | null => 
    !isFocused ? null : <FiXCircle />
  
  return (
    <InputWrapper>
      {getPreIcon()}
      <input {...props} onFocus={setFocus(true)} onBlur={setFocus(false)} />
      {getSufIcon()}
    </InputWrapper>
  )
}

