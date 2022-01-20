import styled from 'styled-components'

export default styled.div`
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 60px;
  border-bottom: 1px solid rgb(219, 219, 219);
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1;

  > div {
    display: flex;
    justify-content: space-between;
    max-width: 975px;
    width: 100%;
  }

  .logo {
    height: 35px;
    width: 30%;
    max-width: 333.5px;
    transform: translateY(4px);

    img {
      height: 100%;
    }
  }

  .icons {
    width: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    svg, .avatar {
      cursor: pointer;
    }
  }
`