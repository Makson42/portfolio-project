import styled from "styled-components";

type SquareType = {
    size?: number;
    gridcolumn?: string;
    gridrow?: string;
    justifyself?: string;
    alignself?: string;
}

export const Square = styled.div<SquareType>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border: 1px solid #ABB2BF;
    grid-column: ${props => props.gridcolumn};
    grid-row: ${props => props.gridrow};
    justify-self: ${props => props.justifyself};
    align-self: ${props => props.alignself};
`