import { CartButton } from "../CartButton"

import { HeaderContainer, LogoContainer } from "./styles";

export function Header(){
    return (
        <HeaderContainer>
            <LogoContainer>
                <strong>MKS</strong>
                <span>Sistemas</span>
            </LogoContainer>

        <CartButton />
        </HeaderContainer>
    )
}