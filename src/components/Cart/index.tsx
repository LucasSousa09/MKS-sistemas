import Image from "next/image";
import { useContext } from "react";

import { CartContext } from "@/contexts/CartContextProvider";

import { CartProduct } from "../CartProduct";
import { CartContainer, HeaderContainer, CartStatusContainer, CartFooterContainer } from "./styles";

import closeImg from '../../assets/close.svg'

export function Cart(){
    const { cart, openCart, setOpenCart} = useContext(CartContext)

    return (
        <CartContainer showCart={openCart}>
            <HeaderContainer>
                <strong>Carrinho de compras</strong>
                <button onClick={() => setOpenCart(false)}>
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
                                }).format(cart.reduce((acc, cur) => acc  + Number(cur.price * cur.quantity), 0)).split(',')[0].replace(/\s/g,'') 
                            }
                        </strong>
                    </div>
                    <button>Finalizar Compra</button>
                </CartFooterContainer>
            </CartStatusContainer>
        </CartContainer>
    )
}