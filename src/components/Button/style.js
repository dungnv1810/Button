import styled, {keyframes} from "styled-components";
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const InputWrapper = styled.button`
    padding: 10px 12px;
    cursor: pointer;
    border: 2px solid palevioletred;
    border-radius: 6px;
    background: #fff;
    background-color: ${props => props.type === 'normal' ? '#fff' : 'palevioletred'};
    color: ${props => props.type === 'normal' ? 'palevioletred' : '#fff'};
    &:hover{
        
    }
    animation: ${rotate} 2s linear infinite;
    @media (max-width: 768px){
        color: red;
    }
`;