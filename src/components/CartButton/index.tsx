import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react';

import { CartButtonContainer } from "./styles";

import cartImg from '../../assets/cart.svg'

interface CartButtonProps {
    openCart:  Dispatch<SetStateAction<boolean>>
}

export function CartButton({openCart}:CartButtonProps){
    return (
        <CartButtonContainer onClick={() => openCart(true)}>
            <Image src={cartImg.src} width={19} height={18} alt="Cart Image"/>
            <span>0</span>
        </CartButtonContainer>
    )
}