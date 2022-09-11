import styled from "styled-components";

export const IconeJS = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  border-radius: 100px;
  border: 10px solid black;
  font-size: 60px;
  font-weight: 800;
  text-align: center;
  text-decoration: none;
  margin-left: 20px;
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
  margin-bottom: 80px;
`;


export const  LinkHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-right: 15px;
  font-size: 30px;
  font-weight: 600;
    a{
      margin-right: 20px;
      text-decoration: none;
      width: 200px;
      height: 40px;
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
  // padding-bottom: 50px;

  img {
    border: 0;
    height: 100px;
    width: 150px;
    
    :hover {
      width: 180px;
      height: 90px;
      background-color: white;
      border: solid 7px black;
      border-radius: 15px
    }
  }

`;