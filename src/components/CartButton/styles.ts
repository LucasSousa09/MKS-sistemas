import styled from 'styled-components'

export const CartButtonContainer = styled.button`
    display: flex;
    align-items: center;
    gap: 16px;

    border: 0;

    padding: 12px 27px 12px 15px;

    background-color: ${(props) => props.theme['white']};

    border-radius: 8px;

    span {
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
        font-weight: 700;
    }
`