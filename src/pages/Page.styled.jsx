import styled from "styled-components"


export const HomeWrapper= styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;


  &>.football-player{
    width: 250px;
    @media screen and (min-width: 768px) {
    width: 500px;
}
    @media screen and (min-width: 1280px) {
    display: none;
}
  }
`
export const PhonebookWrapper= styled.div`
  width: 100%;

  /* background-image: var(--background-image-contacts); */
  transition: background-image 1s ease-in-out;
  background-repeat: no-repeat;
  background-position: center;  
  background-size: cover;

  &>.new {
    position: absolute;
  }
 
`



export const HomeTitle = styled.h1`

  text-align: center;

  font-size: 40px;
  font-weight: 700;
  color: var(--app-title);
  padding: 12px;

  &+span {
    max-width: 800px;
    font-weight: 600;
    color: #eee;
    font-size: 24px;
    text-align: center;
    display: block;

  }
`
export const Page404 = styled.div`
 min-width: 300px;
 display: grid;
 place-items: center;
 text-align: center;

  & > svg {
       fill: var(--text-color);
        transition: fill 1s ease-in-out;

  }
  & > b {

    font-size: 38px;
  }

`