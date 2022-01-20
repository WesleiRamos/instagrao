import styled from 'styled-components'

export default styled.div`
  background-color: rgb(235, 235, 235);
  padding: 10px;
  width: 250px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin: 0 10px;

  * > {
    display: inline-block;
  }

  input {
    border: none;
    outline: none;
    background-color: inherit;
    margin-left: 12px;
    margin-right: 12px;
    flex: 1;
  }

  @media (max-width: 640px) {
    display: none;
  }
`