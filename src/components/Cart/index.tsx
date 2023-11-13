import Image from "next/image";
import { Dispatch, SetStateAction, useContext } from "react";

import { CartContext } from "@/contexts/CartContextProvider";

import { CartProduct } from "../CartProduct";
import { CartContainer, HeaderContainer, CartStatusContainer, CartFooterContainer } from "./styles";

import closeImg from '../../assets/close.svg'

interface CartProps {
    showCart: boolean
    openCart:  Dispatch<SetStateAction<boolean>>
}


export function Cart({ showCart, openCart }: CartProps){
    const { cart } = useContext(CartContext)

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
                    {
                        cart.length > 0 ? cart.map((cartItem) => <CartProduct 
                                                                    key={cartItem.id}
                                                                    id={cartItem.id}
                                                                    name={cartItem.name} 
                                                                    price={cartItem.price} 
                                                                    quantity={cartItem.quantity} 
                                                                    photo={cartItem.photo}
                                                                />) : (<span> Você não possuí items no carrinho </span>)
                    }
                </div>

                <CartFooterContainer>
                    <div>
                        <strong>Total:</strong>
                        <strong>
                            {
                               Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                                }).format(cart.reduce((acc, cur) => acc  + cur.price, 0)).split(',')[0] 
                            }
                        </strong>
                    </div>
                    <button>Finalizar Compra</button>
                </CartFooterContainer>
            </CartStatusContainer>
        </CartContainer>
    )
}