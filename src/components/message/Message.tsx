import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";


export const Message = () => {
    return (
        <StyledMessage>
            <Title>Message me her</Title>
            <List>
                <ListItem><Link href="" aria-label="Discord"><Icon iconId={"Discord"}/>!Elias#3519</Link></ListItem>
                <ListItem><Link href="" aria-label="Email"><Icon iconId={"Email"}/>elias@elias.me</Link></ListItem>
            </List>
        </StyledMessage>
    );
};

const StyledMessage = styled.div`
    width: 100%;
`
const Title = styled.h3`

`
const List = styled.ul`
    list-style-type: none;
`
const ListItem = styled.li`

`
const Link = styled.a`

`