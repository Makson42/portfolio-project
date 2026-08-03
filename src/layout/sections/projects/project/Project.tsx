import styled from "styled-components";

type ProjectPropsType = {
    src?: string;
    skills?: string;
    title?: string;
    text?: string;
    display?: string;
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src} alt="" />
            <Skills>{props.skills}</Skills>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <ButtonLive href="#" display="inline-block">Live &lt;~&gt;</ButtonLive>
            <ButtonCached href="#" display="inline-block">Cached &gt;=</ButtonCached>
        </StyledProject>
    );
};

const StyledProject = styled.div`

`
const Image = styled.img`

`
const Skills = styled.p`
    
`
const Title = styled.h3`
    
`
const Text = styled.p`

`
const ButtonLive = styled.a<ProjectPropsType>`
display: ${props => props.display || 'none'};
`
const ButtonCached = styled.a<ProjectPropsType>`
    display: ${props => props.display || 'none'};
`