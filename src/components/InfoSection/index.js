import React from 'react';
import {Button} from '../ButtonElements';
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper,TopLine,Heading,Subtitle,BtnWrap, ImgWrap, Img2,Img3} from './InfoElements';

const InfoSection = ({lightBg, id ,imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img2,img3, alt,alt3, primary, dark,dark2}) => {
    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
              <InfoWrapper>
                  <InfoRow imgStart={imgStart}>
                      <Column1>
                       <TextWrapper>
                           <TopLine>{topLine}</TopLine>
                           <Heading lightText={lightText}>{headline}</Heading>
                           <Subtitle darkText={darkText}>{description}</Subtitle>
                           <BtnWrap>
                               <Button to='home'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1:0}
                                dark2={dark2 ? 1 : 0}>
                                    {buttonLabel}</Button>
                           </BtnWrap>
                       </TextWrapper>
                      </Column1>
                      <Column2>
                       <ImgWrap>
                       <Img2 src={img2} alt={alt}/>
                       <Img3 src={img3} alt={alt3}/>
                       </ImgWrap>
                      </Column2>
                  </InfoRow>
              </InfoWrapper>
            </InfoContainer>  
        </>
    )
}

export default InfoSection;
