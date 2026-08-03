import styled from "styled-components";

type SkillCardProps = {
    title?: string;
    lines?: string[];
}

export const SkillCard = (props: SkillCardProps) => {
    return (
        <Card>
            <CardTitle>{props.title}</CardTitle>
            <CardBody>
                {props.lines!.map((line, i) => (
                    <div key={i}>{line}</div>
                ))}
            </CardBody>
        </Card>
    );
};

const Card = styled.div`
border: 1px solid #ABB2BF;
`

const CardTitle = styled.div`
color:#FFFFFF;
    font-size: 16px;
    font-weight: 600;
    border-bottom: 1px solid #ABB2BF;
    padding: 8px;
`

const CardBody = styled.div`
color:#ABB2BF;
    font-size: 16px;
    font-weight: 400;
    padding: 8px;
    line-height: 1.9;
`