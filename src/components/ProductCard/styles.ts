import styled from 'styled-components'

export const ProductCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    max-width: 218px;

    border-radius: 8px;
    box-shadow: 0 0 8px rgba(0,0,0, 0.1);

    padding: 18px 0 0;

    background-color: ${(props) => props.theme['white']};

    overflow: hidden;

    @media (max-width: ${(props) => props.theme['mobile-size']}){
        max-width: 251px;
    }
`

export const ProductInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        object-fit: contain;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        height: 38px;

        margin-top: 14px;
        padding: 0 12px 0 14px;
    }

    @media (max-width: ${(props) => props.theme['mobile-size']}){
        img {
            height: 160px;
        }

        div {
            padding: 0 13px 0 16px
        }
    }
`

export const ProductTitle = styled.span`
    text-align: start;
    color: ${(props) => props.theme['gray-900']};
    
    line-height: 19px;

    max-width: 115px;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    
    overflow: hidden;
    text-overflow: ellipsis;
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

    color: ${(props) => props.theme['gray-900']};

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: ${(props) => props.theme['mobile-size']}){
        margin-top: 14px;
    }

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

    @media (max-width: ${(props) => props.theme['mobile-size']}){
        margin-top: 14px;
    }
`