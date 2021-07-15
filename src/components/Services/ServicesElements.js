import styled from 'styled-components'
import {Link as LinkG} from 'react-router-dom';

export const ServicesH1 = styled(LinkG)`
font-size: 2.2rem;
font-family: 'Encode Sans', sans-serif;
color: #003D51;
margin-top: 40px;
text-decoration: none;
display: inline-block;
position: relative;

@media screen and (max-width: 480px){
    font-size: 2rem;
}
`

export const ServicesH3 = styled(LinkG)`
font-size: 2.2rem;
margin-bottom: 30px;
font-family: 'Encode Sans', sans-serif;
color: #003D51;
text-decoration: none;
display: inline-block;
position: relative;

@media screen and (max-width: 480px){
    font-size: 2rem;
}
`
export const ServiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    justify-content: center;
    overflow-x:hidden;
    align-items: center;
    min-height: 700px;

`   
export const ServiceCards = styled.div`
    max-width: 1300px;
    margin: 90px auto;
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 50px;
    padding: 0 50px;
    
    
    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr 1fr;
        padding: 0 20px;
        grid-gap: 20px;
    }
`


export const ServiceCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 340px;
    width: 350px;
    padding: 30px;
    box-shadow: 0 1px 7px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;


    @media screen and (max-width: 768px){
        min-height: 30px;
        min-width: 60px !important;
    }



`;

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    @media screen and (max-width: 768px){
        max-height: 100px;
        max-width: 80px !important;
    }

`;

export const ServicesIcon2 = styled.img`
    height: 160px !important;
    padding-bottom: 5px;
    width: 160px;
    @media screen and (max-width: 768px){
        max-height: 100px;
        max-width: 80px !important;
    }

`;

export const ServiceLearn = styled.p`
  color: #3366FF;
  font-size: 14px;
  text-align: right;
  margin-top:75px;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
`
export const ServiceLearn2 = styled.p`
  color: #3366FF;
  font-size: 14px;
  text-align: right;
  margin-top:75px;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
`
export const ServiceLearn3 = styled.p`
  color: #3366FF;
  font-size: 14px;
  text-align: right;
  margin-top:75px;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
`

export const ServicesIcon3 = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
    @media screen and (max-width: 768px){
        max-height: 100px;
        max-width: 80px !important;
    }

`;

export const ServiceTitle = styled.h2`
    font-size: 18px;
    color: #2D2D2E;
    margin-bottom:0px;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    text-align: left;
 
     @media screen and (max-width: 768px){
       font-size: 1.1rem;
     }
`   
export const ServiceTitle2 = styled.h2`
font-size: 18px;
color: #2D2D2E;
margin-bottom:0px;
font-family: 'Poppins', sans-serif;
font-weight: bold;
text-align: left;

 @media screen and (max-width: 768px){
   font-size: 1.1rem;
 }
`   
export const ServiceP = styled.p`
   font-size: 14px;
   color: black;
   font-family: 'Encode Sans', sans-serif;
     @media screen and (max-width: 768px){
       font-size: 0.7rem;
     }
`

export const ServiceDetails = styled.p`
    font-size: 15px;
    color: gray;
    font-family: 'Poppins', sans-serif;
    text-align: left;
    padding-top: 20px;
    `
export const BacksideList = styled.ul`
 list-style-type: none;


`
export const BacksideItem = styled.li`
font-family: 'Encode Sans', sans-serif;
margin-top: 40px;
@media screen and (max-width: 768px){
    align-items: center;
    border-radius: 10px;
    min-height: 30px;
    margin-top: 30px;
    font-size: 0.7rem;
}

`