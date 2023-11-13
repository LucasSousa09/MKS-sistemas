import Image from 'next/image'
import { useContext } from 'react';

import { CartButtonContainer } from "./styles";

import cartImg from '../../assets/cart.svg'
import { CartContext } from '@/contexts/CartContextProvider';


export function CartButton(){
    const { cart, setOpenCart } = useContext(CartContext)


    return (
        <CartButtonContainer onClick={() => setOpenCart(true)}>
            <Image src={cartImg.src} width={19} height={18} alt="Cart Image"/>
            <span>{cart.length}</span>
        </CartButtonContainer>
    )
}