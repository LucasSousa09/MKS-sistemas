import styled from 'styled-components'

export const FooterContainer = styled.footer`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px 0 9px;
    
    background-color: ${(props) => props.theme['gray-100']};

    z-index: 1;

    span {
        font-size: 12px;
    }
`