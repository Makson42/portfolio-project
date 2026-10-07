import styled from "styled-components";
import {SectionTitle} from "../../../components/sectiontitle/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Project} from "./project/Project.tsx";
import nodesImg from "../../../assets/images/01-banner.webp";
import protectImg from "../../../assets/images/02-banner.webp";
import kahootImg from "../../../assets/images/03-banner.webp";


export const Projects = () => {
    return (
        <StyledProjects>
            <FlexWrapper justify="space-between" align="center">
                <SectionTitle icon="#" label="projects" linewidth="511px"/>
                <View>View all ~~&gt;</View>
            </FlexWrapper>

            <FlexWrapper justify="space-between" align="center">
                <Project src={nodesImg} skills={"HTML SCSS Python Flask"} title={"ChertNodes"} text={"Minecraft servers hosting"}/>
                <Project src={protectImg} showCached={false} skills={"React Express Discord.js Node.js HTML SCSS Python Flask"} title={"ProtectX"}
                         text={"Discord anti-crash bot"}/>
                <Project src={kahootImg} showCached={false} skills={"HTML SCSS Python Flask"} title={"ChertNodes"} text={"Minecraft servers hosting"}/>
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;
`

const View = styled.span`
    color: #FFFFFF;

`