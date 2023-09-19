import styled from "styled-components"



export const HomeWrapper= styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;



      @media screen and (min-width: 768px) {
    min-height: 700px;
    }

    @media screen and (min-width: 1280px) {
      min-height: 700px;
    }

`
export const CatalogueWrapper= styled.div`
  &>button.LoadMore{
    width: 160px;
    justify-self: center;
    color: var(--blue);
    background-color: transparent;
    font-weight: 600;
    margin-top: 50px;
  }

`

export const HomeTitle = styled.h1`

  text-align: center;

  font-size: 40px;
  font-weight: 700;
  color: var(--text-color);
  padding: 12px;
  transition: all 1s ease-in-out;

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
 color: var(--text-color);
 transition: all 1s ease-in-out;
  & > svg {
       fill: var(--text-color);
        transition: all 1s ease-in-out;

  }
  & > b {

    font-size: 38px;
  }

`
export const Gallery = styled.div`
  display: grid;
  place-items: center;
  gap: 30px;
  

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
}
    @media screen and (min-width: 1280px) {
      grid-template-columns: repeat(4, 1fr);
    }
`