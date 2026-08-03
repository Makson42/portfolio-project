import styled from "styled-components";
import {SectionTitle} from "../../../components/sectiontitle/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Project} from "./project/Project.tsx";


export const Projects = () => {
    return (
            <StyledProjects>
                <FlexWrapper justify="space-between" align="center">
                    <SectionTitle icon="#" label="projects" linewidth="511px"/>
                    <StyledView>View all ~~&gt;</StyledView>
                </FlexWrapper>

                <Project/>
            </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;
`

const StyledView = styled.span`
color: #FFFFFF;
    
`