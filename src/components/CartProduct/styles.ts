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

    > img {
        object-fit: contain;
    }

    > span {
        font-size: 13px;
        line-height: 17px;
        
        min-width: 113px;
        max-width: 113px;
        margin-left: 21px;

        color: ${(props) => props.theme['gray-900']};
    }

    > strong {
        margin-left: auto;
        
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
    }

    @media (max-width: ${(props) => props.theme['mobile-size']}){
        display: grid;

        width: 250px;

        padding: 22px 23px 21px 16px;

        grid-template-areas:
            'img img'
            'name name'
            'qtd price';

        > img {
            grid-area: img;

            height: 100px;
            width: 100%;
        }

        > span{
            grid-area: name;

            font-size: 16px;
            text-align: center;

            margin-top: 14px;

            max-width: 100%;
        }

        > strong {
            grid-area: price;
            
            margin-top: 10px;
            padding: 9px 17px;

            font-size: 15px;

            border-radius: 5px;

            color: ${(props) => props.theme['white']};
            background-color: ${(props) => props.theme['gray-800']};
        }
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

    @media (max-width: ${(props) => props.theme['mobile-size']}){
        grid-area: qtd;

        width: fit-content;
        margin-top: 11px;
        margin-left: 0;

        > span {
            display: none
        }

        div{
            height: 34px;

            span {
                font-size: 22px;

                height: 26px;
                width: 32px;
            }

            button {
                width: 33px;
                height: 34px;
    
                font-size: 22px;
            }
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

    @media (max-width: ${(props) => props.theme['mobile-size']}){
        top: 0px;
        right: 0px;

        width: 45px;
        height: 45px;
    
        img{
            width: 45px;
            height: 45px;
            
            filter: invert(100%);
            -webkit-filter: invert(100%); 
        }
    }
`