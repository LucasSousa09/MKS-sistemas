import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

import { CartProduct } from "../CartProduct";
import { CartContainer, HeaderContainer, CartStatusContainer, CartFooterContainer } from "./styles";

import closeImg from '../../assets/close.svg'

interface CartProps {
    showCart: boolean
    openCart:  Dispatch<SetStateAction<boolean>>
}


export function Cart({ showCart, openCart }: CartProps){
    return (
        <CartContainer showCart={showCart}>
            <HeaderContainer>
                <strong>Carrinho de compras</strong>
                <button onClick={() => openCart(false)}>
                    <Image src={closeImg} alt="Um Circulo Preto com um X dentro" height={38} width={38}/>
                </button>
            </HeaderContainer>

            <CartStatusContainer>
                <div>
                    <CartProduct />
                    <CartProduct />
                </div>

                <CartFooterContainer>
                    <div>
                        <strong>Total:</strong>
                        <strong>R$798</strong>
                    </div>
                    <button>Finalizar Compra</button>
                </CartFooterContainer>
            </CartStatusContainer>
        </CartContainer>
    )
}