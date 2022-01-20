import styled from 'styled-components'

type SuggestionWrapperProps = {
  size?: number
}

export const SuggestionWrapper = styled.div<SuggestionWrapperProps>`
  display: grid;
  grid-template-columns: ${(props: SuggestionWrapperProps) => {
    const columns = props.size === 32 
      ? [ 32, 200, 35 ]
      : [ 56, 180, 35 ]

    return columns
      .map(column => `${column}px`)
      .join(' ')
  }};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;

  .information {
    p:first-child {
      color: rgb(38, 38, 38);
      font-weight: 600;
    }

    p:last-child {
      color: rgb(142, 142, 142);
      font-size: 12px;
    }
  }

  a, a:visited, a:hover {
    color: #0095f6;
  }
`