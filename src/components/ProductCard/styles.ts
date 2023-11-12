import styled from 'styled-components'

export const ProductCardContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    max-width: 218px;

    border-radius: 8px;
    box-shadow: 0 0 8px rgba(0,0,0, 0.1);

    padding: 18px 0 0;

    background-color: ${(props) => props.theme['white']};

    overflow: hidden;

    div{
        display: flex;
        align-items: center;
        gap: 24px;

        margin-top: 14px;
        padding: 0 12px 0 14px;
    }
`

export const ProductTitle = styled.span`

    color: ${(props) => props.theme['gray-900']};
    
    line-height: 19px;
    max-width: 108px;
`

export const ProductsPrice = styled.strong`
    padding: 4px 6px;

    border-radius: 5px;
    
    color: ${(props) => props.theme['white']};
    background: ${(props) => props.theme['gray-800']};
`

export const ProductDescription = styled.p`
    margin-top: 8px;

    font-size: 10px;
    font-weight: 300;
    line-height: 12px;
    padding: 0 12px 0 14px;

    color: ${(props) => props.theme['gray-900']}

`
export const BuyButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;

    margin-top: 12px;
    width: 100%;

    padding: 9px 0;

    font-size: 14px;
    font-weight: 600;

    text-transform: uppercase;

    color: ${(props) => props.theme['white']};
    background-color: ${(props) => props.theme['blue']};

    border: 0;
`