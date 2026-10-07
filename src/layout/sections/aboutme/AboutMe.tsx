import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/sectiontitle/SectionTitle.tsx";
import aboutmeImg from "../../../assets/images/image-about.webp";



export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <FlexWrapper>
                <About>
                    <SectionTitle icon="#" label="about-me" linewidth="326px"/>
                    <Text>Hello, i’m Elias!</Text>
                    <Text>I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive
                        websites from scratch and raise them into modern user-friendly web experiences. </Text>
                    <Text>Transforming my creativity and knowledge into a websites has been my passion for over a year.
                        I have been helping various clients to establish their presence online. I always strive to learn
                        about the newest technologies and frameworks.</Text>
                    <Button>Read more {"->"}</Button>
                </About>
                <Image src={aboutmeImg}></Image>
            </FlexWrapper>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    min-height: 100vh;
    width: 1025px;
`
const About = styled.div`

`
const Image = styled.img`
    width: 339px;
    height: 507px;
    object-fit: cover;
`
const Text = styled.p`

`
const Button = styled.a`

`