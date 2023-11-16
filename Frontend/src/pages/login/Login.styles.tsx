import styled from "styled-components";

export const LoginContainer = styled.div`
    display: grid;
    grid-template-columns: 700px 1fr;
    grid-template-rows: 100vh; /* Define the row heights explicitly */
    height: 100vh;
`


export const LoginHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 19px;
    width: 100%;
    margin-bottom: 20px;
`

export const LoginItem1 = styled.div`
    
`

export const LoginItem2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
`

export const InputContainer = styled.div`
display: flex;
flex-direction: row;
column-gap: 12px;
align-items: center;
    
`

export const StyledImage = styled.img`
    width: 100%;
    height: 100%;
  
`;

export const ButtonContainer = styled.div`
    width: 100%;
    margin-top: 7px;
`