import styled from 'styled-components'

export const HomeContainer = styled.div`
    position: relative;
    
    display: flex;
    flex-direction: column;

    width: 100vw;
    height: 100vh;

    overflow: hidden;
`

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    background-color: ${(props) => props.theme['gray-50']};

    @media (max-width: ${(props) => props.theme['tablet-sizeB']}){
        align-items: flex-start;

        overflow-y: auto;
        padding-bottom: 50px;
    }

    @media (max-width: ${(props) => props.theme['mobile-size']}){
        align-items: flex-start;
    }
`

