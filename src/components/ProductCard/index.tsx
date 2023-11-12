import Image from "next/image";
import { 
         ProductCardContainer, 
         ProductTitle,
         ProductDescription, 
         ProductsPrice,
         BuyButton
       } from "./styles";

import appleWatchImg from '../../assets/apple-watch.png'
import shoppingBagImg from '../../assets/shopping-bag.svg'

export function ProductCard(){
    return (
        <ProductCardContainer>
            <Image src={appleWatchImg.src} alt="Um Relógio Branco Quandrado" height={138} width={111}/>
            <div>
                <ProductTitle>
                    Apple Watch Series 4 GPS
                </ProductTitle>
                <ProductsPrice>
                    R$399
                </ProductsPrice>
            </div>
            <ProductDescription>
                Redesigned from scratch and completely revised.
            </ProductDescription>
            <BuyButton>
                <Image src={shoppingBagImg.src} alt='Desenho de uma sacola de compras' width={12} height={13.5} />
                Comprar
            </BuyButton>
        </ProductCardContainer>        
    )
}