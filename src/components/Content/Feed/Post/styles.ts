import styled from 'styled-components'

export const PostWrapper = styled.div`
  border-radius: 2px;
  margin: 20px 0;
  background-color: white;
  border: 1px solid rgb(219, 219, 219);
  width: 100%;

  @media (max-width: 614px) {
    border: none;
  }

  b {
    font-size: 14px;
    color: rgb(38, 38, 38);
    font-weight: 600;
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;

    .user {
      display: flex;
      align-items: center;
      
      b {
        margin-left: 10px;
      }
    }

    .options {
      svg {
        cursor: pointer;
      }
    }
  }

  .content {
    img {
      width: 100%;
      user-select: none;
      pointer-events: none;
    }
  }

  .bottom {
    > div:not(:last-child) {
      padding-left: 15px;
      padding-right: 15px;
    }
    
    svg {
      width: 26px;
      height: 26px;
      cursor: pointer;
    }

    .actions {
      display: flex;
      justify-content: space-between;
      padding-top: 10px;
      padding-bottom: 10px;

      svg:not(:last-child) {
        margin-right: 15px;
      }
      
      svg:nth-child(2) {
        transform: scaleX(-1);
      }
    }

    .post-info {
      font-size: 14px;
      margin-top: -10px;

      > * {
        margin: 8px 0;
      }

      .subtitle {
        margin-top: 10px;
        
        b + span {
          margin-left: 2px;
        }
      }

      .c-all-comments {
        color: rgb(142, 142, 142);
        cursor: pointer;
      }

      .time-ago {
        font-size: 10px;
        color: rgb(142, 142, 142);
        text-transform: uppercase;
      }
    }

    .comment-box {
      border-top: 1px solid #f0f0f0;
      display: flex;
      align-items: center;
      margin-top: 20px;

      > * {
        padding: 10px 15px;
      }

      > div:first-child {
        width: 10px;
      }

      input, button {
        outline: none;
        border: none;
        background-color: transparent;
      }

      input {
        flex: 1;
        &:placeholder-shown + button {
          opacity: 0.4;
        }
      }

      button {
        color: #0095f6;
        font-weight: bold;
      }

      @media (max-width: 614px) {
        display: none;
      }
    }
  }
`
