import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import photo from "../../../assets/images/image-preview.webp";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper>
                <FirstLook>
                    <Title>Elias is a web designer and front-end developer</Title>
                    <Paragraph>He crafts responsive websites where technologies meet creativity</Paragraph>
                    <ContactMe>Contact me !!</ContactMe>
                </FirstLook>

                <FirstLook>
                    <Photo src={photo} alt="The guy in the hood"/>
                    <Paragraph>Currently working on Portfolio</Paragraph>
                </FirstLook>
            </FlexWrapper>

            <Quote>
                With great power comes great electricity bill
                <Author>- Dr. Who</Author>
            </Quote>
        </StyledMain>
    );
};

const StyledMain = styled.section`

`
const FirstLook = styled.div`

`
const Title = styled.h1`

`
const Paragraph = styled.p`

`
const ContactMe = styled.button`

`
const Photo = styled.img`
    width: 457px;
    height: 386px;
    object-fit: cover;
    object-position: top;
`
const Quote = styled.blockquote`

`
const Author = styled.cite`

`
