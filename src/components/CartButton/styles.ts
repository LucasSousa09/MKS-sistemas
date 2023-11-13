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

    @media (max-width: ${(props) => props.theme['mobile-size']}){
        gap: 10px;
        padding: 6px 14px 6px 9px;

        span {
            font-size: 12px;
        };

        img{
            max-width: 11px;
            max-height: 10px;
        }
    }
`