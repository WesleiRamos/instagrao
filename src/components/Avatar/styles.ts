import styled from 'styled-components';

type AvatarWrapperProps = {
  size: number | undefined;
  hasStories?: boolean;
}

export const AvatarWrapper = styled.div<AvatarWrapperProps>`
  width: ${(props: AvatarWrapperProps) => props.size ?? 40}px;
  height: ${(props: AvatarWrapperProps) => props.size ?? 40}px;
  border-radius: 50%;
  padding: 2px;
  cursor: pointer;
  user-select: none;
  
  ${(props: AvatarWrapperProps) => props.hasStories && `
    background-image: linear-gradient(to bottom, #d82b7c, #f67b38);
  `}

  img {
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    overflow: hidden;
    padding: 2px;
    background-color: white;
    pointer-events: none;
    object-fit: cover;
  }
`
