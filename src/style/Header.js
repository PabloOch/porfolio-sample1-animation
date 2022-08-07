import styled from "styled-components";

export const IconeJS = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  border: 10px solid black;
  font-size: 60px;
  font-weight: 800;
  text-align: center;
  text-decoration: none;
  margin-left: 15px;
  color: black;
  :hover {
    background-color: black;
    border-color: white;
    color: white;
  }
  
`
export const LinkPosition = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;


export const  LinkHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-right: 15px;
  font-size: 40px;
  font-weight: 800;
    a{
      margin-right: 20px;
      text-decoration: none;
      width: 200px;
      height: 50px;
      border: 8px solid black;
      border-radius: 30px;
      text-align: center;
      color: black;
      :hover {
        background-color: black;
        color: white;
        border-color: white;
      }

    }

`;

export const ButtonHome = styled.button`
  width: 210px;
  height: 120px;
  background-color: white;
  border: none;

  img {
    border: 0;
    height: 100px;
    width: 150px;
    
    :hover {
      width: 210px;
      height: 120px;
      background-color: white;
      border: solid 7px black;
      border-radius: 15px
    }
  }

`;