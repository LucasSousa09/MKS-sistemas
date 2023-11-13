import styled from "styled-components";

export const Container = styled.main`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    column-gap: 22px;
    row-gap: 31px;

    margin-top: -42px;

    @media (max-width: ${(props) => props.theme['tablet-sizeB']}){
        grid-template-columns: repeat(3, minmax(0, 1fr));
        margin-top: 18px;
    }

    @media (max-width: ${(props) => props.theme['tablet-sizeS']}){
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: ${(props) => props.theme['mobile-size']}){
        grid-template-columns: 1fr;
    }
`