import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 28px 88px 28px 65px;
    background-color: ${(props) => props.theme['blue']};

    @media (max-width: ${(props) => props.theme['mobile-size']}){
        padding: 2px 23px 2px 20px;
    }
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: flex-end;

    gap: 8px;

    color: ${(props) => props.theme['white']};

    strong {
        font-size: 40px;
        font-weight: 600;
        line-height: 45px;
    }

    span {
        font-size: 20px;
        font-weight: 300;
        margin-bottom: 8px;
    }

    @media (max-width: ${(props) => props.theme['mobile-size']}){
        strong {
            font-size: 32px;
            line-height: 44px;
        }
        span {
            font-size: 16px;
            margin-bottom: 12px;
        }
    }
`
