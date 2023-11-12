import styled from 'styled-components'

export const CartProductContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    width: 100%;

    padding: 19px 15px 19px 23px;
    margin-bottom: 28px;

    box-shadow: 0 0 6px rgba(0,0,0,0.2);

    border-radius: 8px;

    background-color: ${(props) => props.theme['white']};

    > span {
        font-size: 13px;
        line-height: 17px;
        
        max-width: 113px;
        margin-left: 21px;

        color: ${(props) => props.theme['gray-900']};
    }

    > strong {
        margin-left: 40px;
        
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
    }
`

export const QuantityContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 4px;

    margin-top: -12px;
    margin-left: 9px;

    width: 50px;

    span {
        font-size: 5px;
        color: ${(props) => props.theme['black']};        
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        
        border-radius: 4px;
        border: 1px solid ${(props) => props.theme['gray-300']};

        button {
            width: 17px;
            height: 19px;

            border: 0;

            font-size: 8px;

            background-color: transparent;
        }

        span {
            text-align: center;
            font-size: 8px;

            height: 11.5px;
            width: 16px;

            border-left: 1px solid ${(props) => props.theme['gray-300']};
            border-right: 1px solid ${(props) => props.theme['gray-300']};
        }
    }
`

export const CloseButton = styled.button`
    position: absolute;
    top: -6px;
    right: -6px;
    
    width: 18px;
    height: 18px;
    
    border: 0;
    background-color: transparent;
`