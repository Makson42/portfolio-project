import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {Icon} from "../../components/icon/Icon.tsx";


export const Footer = () => {
    return (
        <StyledFooter>
            <Block>
                <FlexWrapper>
                    <Block>
                        <FlexWrapper>
                            <Logo/>
                            <Email>elias@elias-dev.ml</Email>
                        </FlexWrapper>

                        <Text>Web designer and front-end developer</Text>
                    </Block>

                    <Block>
                        <Title>Media</Title>
                        <FlexWrapper>
                            <Link href="" aria-label="Github"><Icon iconId={"Github"}/></Link>
                            <Link href="" aria-label="Figma"><Icon iconId={"Figma"}/></Link>
                            <Link href="" aria-label="Discord"><Icon iconId={"Discord"}/></Link>
                        </FlexWrapper>
                    </Block>
                </FlexWrapper>

                <Text>© Copyright 2022. Made by Elias</Text>
            </Block>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`

`
const Block = styled.div`

`
const Text = styled.p`

`
const Link = styled.a`

`
const Email = styled.a`

`
const Title = styled.h3`

`