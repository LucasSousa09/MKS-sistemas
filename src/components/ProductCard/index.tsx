import { CartContext } from "@/contexts/CartContextProvider";
import { useContext } from "react";
import Image from "next/image";

import { 
         ProductCardContainer, 
         ProductTitle,
         ProductDescription, 
         ProductsPrice,
         BuyButton,
         ProductInfoContainer
       } from "./styles";

import shoppingBagImg from '../../assets/shopping-bag.svg'

interface ProductsCardProps {
    id: number
    name: string,
    description: string,
    price: number,
    photo: string,
}


export function ProductCard({id, name, description, price, photo}: ProductsCardProps){
    const { updateCart } = useContext(CartContext)

    return (
        <ProductCardContainer>
            <ProductInfoContainer>
                <Image src={photo} alt="Um Relógio Branco Quandrado" height={138} width={172}/>
                <div>
                    <ProductTitle>
                        {name}
                    </ProductTitle>
                    <ProductsPrice>
                        {
                        Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                            }).format(price).split(',')[0]
                        }
                    </ProductsPrice>
                </div>
                <ProductDescription>
                    {description}
                </ProductDescription>
            </ProductInfoContainer>
            <BuyButton onClick={() => updateCart({id, name, photo, price})}>
                <Image src={shoppingBagImg.src} alt='Desenho de uma sacola de compras' width={12} height={13.5} />
                Comprar
            </BuyButton>
        </ProductCardContainer>        
    )
}