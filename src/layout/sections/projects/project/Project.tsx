import styled from "styled-components";

type ProjectPropsType = {
    src?: string;
    skills?: string;
    title?: string;
    text?: string;
    showLive?: boolean;
    showCached?: boolean;
}
type ButtonProps = {
    $display?: "inline-block" | "none";
}

export const Project = ({showLive=true, showCached=true, ...props}: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src} alt=""/>
            <Skills>{props.skills}</Skills>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <ButtonLive href="#" $display={showLive? "inline-block" : "none"}>Live &lt;~&gt;</ButtonLive>
            <ButtonCached href="#" $display={showCached? "inline-block" : "none"}>Cached &gt;=</ButtonCached>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    background-color: #ABB2BF;
    width: 330px;
    height: 391px;
`
const Image = styled.img`
    width: 100%;
    height: 201px;
    object-fit: cover;
`
const Skills = styled.p`

`
const Title = styled.h3`

`
const Text = styled.p`

`
const ButtonLive = styled.a<ButtonProps>`
    display: ${props => props.$display};
`
const ButtonCached = styled.a<ButtonProps>`
    display: ${props => props.$display};
`