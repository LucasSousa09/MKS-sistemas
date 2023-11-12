import Image from 'next/image'

import { CartProductContainer, CloseButton, QuantityContainer } from './styles'

import closeImg from '../../assets/close.svg'
import appleWatchImg from '../../assets/apple-watch.png'

export function CartProduct(){
    return (
        <CartProductContainer>
            <CloseButton>
                <Image src={closeImg} alt='' width={18} height={18} />
            </CloseButton>
            <Image src={appleWatchImg.src} alt='' height={57} width={46} />
            <span>Apple Watch Series 4 GPS</span>
            
            <QuantityContainer>
                <span>Qtd:</span>
                <div>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </div>
            </QuantityContainer>
            
            <strong>R$399</strong>
        </CartProductContainer>
    )
}