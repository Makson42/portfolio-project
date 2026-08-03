import styled from "styled-components";

type LabelType = {
    label?: string;
    linewidth?: string;
    icon?: string;
}

export const SectionTitle = (props: LabelType) => {
    return (
        <Container>
            <Icon>{props.icon}</Icon>
            <Label>{props.label}</Label>
            <Line linewidth={props.linewidth}/>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
    color: #C778DD;
    font-size: 32px;
`

const Label = styled.h2`
  font-size: 22px;
  font-weight: 500;
  color: #FFFFFF;
`;

const Line = styled.div<LabelType>`
  width: ${props => props.linewidth || "0px"};
  height: 1px;
  background: #C778DD;
    margin-left: 16px;
`;
