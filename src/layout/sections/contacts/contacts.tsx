import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/sectiontitle/SectionTitle.tsx";
import {Message} from "../../../components/message/Message.tsx";


export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle icon="#" label="contacts" linewidth="127px"/>

            <FlexWrapper>
                <Text>I’m interested in freelance opportunities. However, if you have other request or question, don’t
                    hesitate to contact me</Text>

                <Message/>
            </FlexWrapper>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    min-height: 100vh;
    width: 1023px;
`
const Text = styled.p`

`