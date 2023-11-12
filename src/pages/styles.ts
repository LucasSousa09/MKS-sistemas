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
`

export const ProductsContainer = styled.main`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    column-gap: 22px;
    row-gap: 31px;

    margin-top: -42px;
`