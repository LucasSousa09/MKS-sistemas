import styled from 'styled-components'

interface CartContainerProps{
    showcart: string
}

export const CartContainer = styled.div<CartContainerProps>`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;

    width: 486px;
    max-height: 100vh;

    overflow: hidden;
    
    box-shadow: 0 0 6px rgba(0,0,0,0.2);

    background-color: ${(props) => props.theme['blue']};

    transform: translateX(${(props) => props.showcart === 'true' ? 0 : 486}px);
    transition:  .4s ease;

    z-index: 9999;

    @media (max-width: ${(props) => props.theme['mobile-size']}){
        width: 330px;
    }
`

export const HeaderContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    padding: 36px 22px 0 47px;

    strong {
        max-width: 180px;

        font-size: 27px;
        font-weight: 700;

        color: ${(props) => props.theme['white']};
    }

    button {
        margin-top: 3px;

        height: 38px;
        width: 38px;

        background: transparent;
        border: 0;
    }

    @media (max-width: ${(props) => props.theme['mobile-size']}){
        padding: 25px 15px 0 32px;
        
        button {
            margin-top: 1px;

            height: 45px;
            width: 45px;

            img {
                height: 45px;
                width: 45px;
            }
        }
    }
`

export const CartStatusContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    //102 is the Header height
    height: calc(100% - 102px);

    > div{
        width: 100%;
        padding: 61px 60px 0 47px;

        max-height: calc(100% - 184px);
        overflow-y: auto;
        overflow-x: hidden;

        >span{
            color: ${(props) => props.theme['white']}
        }
    }

    @media (max-width: ${(props) => props.theme['mobile-size']}){
        > div{
            padding: 26px 46px 0 34px;
        }
        height: calc(100% - 91px);
    }
`

export const CartFooterContainer = styled.footer`
    width: 100%;
    
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0 63px 42px 47px;

        strong {
            font-size: 28px;
            font-weight: 700;
            line-height: 15px;
            
            color: ${(props) => props.theme['white']};
        }
    }

    button {
        border: 0;

        font-family: inherit;

        width: 100%;
        padding: 41px 0;

        font-size: 28px;
        font-weight: 700;

        line-height: 15px;

        color: ${(props) => props.theme['white']};
        background-color: ${(props) => props.theme['black']};
    }

    @media (max-width: ${(props) => props.theme['mobile-size']}){
        div {
            padding: 0 43px 38px 32px;
        }

        button {
            padding: 26px 0;
            font-size: 20px;
        }
    }
    
`