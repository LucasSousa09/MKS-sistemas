import { Dispatch, SetStateAction } from "react";

import { CartButton } from "../CartButton"

import { HeaderContainer, LogoContainer } from "./styles";



interface HeaderProps {
    openCart:  Dispatch<SetStateAction<boolean>>
}

export function Header({openCart}: HeaderProps){
    return (
        <HeaderContainer>
            <LogoContainer>
                <strong>MKS</strong>
                <span>Sistemas</span>
            </LogoContainer>

        <CartButton openCart={openCart}/>
        </HeaderContainer>
    )
}