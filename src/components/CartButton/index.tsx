import Image from 'next/image'
import { Dispatch, SetStateAction, useContext } from 'react';

import { CartButtonContainer } from "./styles";

import cartImg from '../../assets/cart.svg'
import { CartContext } from '@/contexts/CartContextProvider';

interface CartButtonProps {
    openCart:  Dispatch<SetStateAction<boolean>>
}

export function CartButton({openCart}:CartButtonProps){
    const { cart } = useContext(CartContext)

    return (
        <CartButtonContainer onClick={() => openCart(true)}>
            <Image src={cartImg.src} width={19} height={18} alt="Cart Image"/>
            <span>{cart.length}</span>
        </CartButtonContainer>
    )
}