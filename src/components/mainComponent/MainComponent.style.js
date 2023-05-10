import styled from "styled-components";

export const MainContainer = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;
  padding-top: 5vw;
`

export const ContainerIntro = styled.div`
  display: flex;
`

export const TextIntro = styled.div`
  display: flex;
  flex-direction: column;
  width: 75vw;
  text-align: left;
  align-items: start;
  gap: 2vw;
  .ones{
    font-weight: 700;
    font-family: Manrope,sans-serif;
    font-size: 3vw;
    width: 45vw;
  }
  .twos{
    font-weight: 400;
    font-family: Ubuntu, sans-serif;
    font-size: 1.5vw;
    width: 45vw;
  }
`

export const ButtonIntro = styled.button`
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  padding: .8vw 4vw;
  background: blue;
  color: white;
  border-radius: 2vw;
  font-family: Quicksand, sans-serif;
  font-size: 2vw;
`
export const PictureIntro = styled.img`
  width: 25vw;
`

export const Partners = styled.div`
  margin-top: 3vw;
  display: flex;
  justify-content: space-between;
  font-family: Manrope,sans-serif;
  font-weight: 700;
  font-size: 2vw;
  .text{
    width: 5vw;
  }
`
export const FeatureContainer = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 1vw;
  .picture{
    margin-top: 7vw;
    margin-left: 5vw;
    margin-right: 5vw;
    width: 20vw;
  }
`
export const FeatureRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 75vw;
  span{
    font-family: Manrope,sans-serif;
    font-weight: 700;
    font-size: 2.6vw;
    text-align: left;
  }
`

export const FeatureGrid = styled.div`
  display: grid;
  margin-top: 2vw;
  grid-template-columns: 25vw 25vw;
  grid-template-rows: 50% 1fr;
  gap: 2vw 4vw;
`
export const FeatureItem = styled.div`
  text-align: left;
  width: 20vw;
  font-family: Ubuntu,sans-serif;
  font-weight: 400;
  font-size: 1vw;
  img{
    width: 5vw;
  }
  h1{
    margin-top: .3vw;
    font-family: Manrope,sans-serif;
    font-weight: 700;
    font-size: 1.8vw;
  }
`
export const ReviewsBase = styled.div`
  display: flex;
  margin-top: 5vw;
  flex-direction: column;
`
export const ReviewsHeader = styled.div`
  font-size: 2vw;
  text-align: left;
  font-family: Manrope,sans-serif;
  font-weight: 700;
  width: 35vw;
`
export const ReviewsContainer = styled.div`
  display: flex;
  margin-top: 2vw;
  gap: 5vw;
  flex-direction: row;
`
export const ReviewsItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  h1{
    font-size: 1.8vw;
    font-family: Manrope,sans-serif;
    width: 30vw;
  }
  h2{
    font-size: 1vw;
    font-family: Ubuntu,sans-serif;
    font-weight: 400;
  }
`
export const UserList = styled.div`
  display: flex;
  margin-top: 2vw;
  font-family: Manrope,sans-serif;
  font-size: 1.6vw;
  .text{
    margin-left: 2vw;
  }
  span{
    font-family: Ubuntu,sans-serif;
    font-weight: 400;
    font-size: 1.4vw;
  };
`

export const SubsContainer =styled.div`
  display: flex;
  margin-top: 5vw;
  flex-direction: column;
`
export const SubsHeader = styled.div`
  font-size: 2vw;
  text-align: left;
  font-family: Manrope,sans-serif;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  span{
    width: 35vw;
    display: flex;
  }
`
export const ButtonSubs = styled.button`
  margin-top: 1vw;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  background: white;
  color: #7380FF;
  border-radius: 4vw;
  border: .3vw solid #7380FF;
  font-family: Quicksand, sans-serif;
  font-weight: 700;
  font-size: 1.5vw;
  height: 3.5vw;
  width: 20vw;
  padding: .4vw 3vw;
`
export const SubsContBase = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5vw;
`
export const SubsContOne = styled.div`
  display: flex;
  padding: 3vw 5vw 5vw 5vw;
  background: #FFF2D0;
  width: 20vw;
  border-radius: 2vw;
  text-align: left;
  flex-direction: column;
  font-family: Ubuntu,sans-serif;
  font-size: 1.2vw;
  h1{
    margin-top: .8vw;
    margin-bottom: .8vw;
  }
  ul{
    padding-left: 2vw;
    li::marker{
      font-size: 2vw;
    }
    li{
      font-family: Ubuntu,sans-serif;
      font-size: 1vw;
      margin-top: 1vw;
      color: #FFB800;
      span{
        color: black;  
      }
    }
  }
`
export const SubsContTwo = styled.div`
  display: flex;
  padding: 3vw 5vw 5vw 5vw;
  background: #7380FF;
  width: 20vw;
  border-radius: 2vw;
  text-align: left;
  flex-direction: column;
  color: white;
  font-family: Ubuntu,sans-serif;
  font-size: 1.2vw;
  h1{
    margin-top: .8vw;
    margin-bottom: .8vw;
  }
  ul{
    padding-left: 2vw;
    li::marker{
      font-size: 2vw;
    }
    li{
      font-family: Ubuntu,sans-serif;
      font-size: 1vw;
      margin-top: 1vw;
      color: #001AFF;
      span{
        color: white;
      }
    }
`
export const SubsButtonOne = styled.button`
  margin-top: 1vw;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  color: #FFB800;
  border-radius: 4vw;
  border: .1vw solid #FFB800;
  font-family: Quicksand, sans-serif;
  font-weight: 700;
  font-size: 1.5vw;
  height: 4vw;
  width: 20vw;
  padding: 1vw 5.5vw;
`
export const SubsButtonTwo = styled.button`
  margin-top: 1vw;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  color: white;
  background: #001AFF;
  border-radius: 4vw;
  font-family: Quicksand, sans-serif;
  font-weight: 700;
  font-size: 1.5vw;
  height: 4vw;
  width: 20vw;
  padding: 1vw 3.5vw;
`