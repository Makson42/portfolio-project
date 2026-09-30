import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/sectiontitle/SectionTitle.tsx";



export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <FlexWrapper>
                <StyledAbout>
                    <SectionTitle icon="#" label="about-me" linewidth="326px"/>
                </StyledAbout>
            </FlexWrapper>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    min-height: 100vh;
`
const StyledAbout = styled.div`

`