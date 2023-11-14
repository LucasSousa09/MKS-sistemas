import Image from 'next/image'

import { CartProductContainer, CloseButton, QuantityContainer } from './styles'

import closeImg from '../../assets/close.svg'
import { useContext } from 'react'
import { CartContext } from '@/contexts/CartContextProvider'

interface CartProduct{
    id: number
    name: string 
    price: number 
    quantity: number 
    photo: string
}

export function CartProduct(props: CartProduct){
    const { removeFromCart, updateCart, decreaseOne } = useContext(CartContext)

    return (
        <CartProductContainer>
            <CloseButton title='closeButton' onClick={() => removeFromCart(props.id)}>
                <Image src={closeImg} alt='' width={18} height={18} />
            </CloseButton>
            <Image src={props.photo} alt='' height={57} width={46} />
            <span>{props.name}</span>
            
            <QuantityContainer>
                <span>Qtd:</span>
                <div>
                    <button id='decreaseButton' onClick={() => decreaseOne(props.id)}>-</button>
                    <span>{props.quantity}</span>
                    <button id='increaseButton' onClick={() => updateCart({id: props.id})}>+</button>
                </div>
            </QuantityContainer>
            
            <strong>
                {                        
                    Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                        }).format(props.price * props.quantity).split(',')[0].replace(/\s/g,'')
                }
            </strong>
        </CartProductContainer>
    )
}