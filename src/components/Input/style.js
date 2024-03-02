import styled from "styled-components";
export const InpurWrapper = styled.input`
    height: auto;
    border: 1px solid #cacaca;
    border-radius: 5px;
    padding: 10px 12px;
    outline: 0px;
    width: ${props => `${props.width}px`};
    &::placeholder{
        color: #cacaca;
    }
    &:focus{
        outline: 1px solid tomato;
    }
    &:disabled{

    }
`;