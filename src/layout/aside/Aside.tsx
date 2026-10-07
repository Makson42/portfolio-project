import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";


export const Aside = () => {
    return (
        <StyledAside>
            <Link href="" aria-label="Github"><Icon iconId={"Github"}/></Link>
            <Link href="" aria-label="Dribble"><Icon iconId={"Dribble"}/></Link>
            <Link href="" aria-label="Figma"><Icon iconId={"Figma"}/></Link>
        </StyledAside>
    );


};

const StyledAside = styled.aside`
    position: absolute;
    top: 0;
    left: 17px;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    &::before {
        content: '';
        width: 1px;
        height: 191px;
        margin-bottom: 8px;
        background-color :#ABB2BF;
    }
`
const Link = styled.a`

`