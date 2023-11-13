import { GetServerSideProps } from "next";
import { useState, useContext } from "react";

import { CartContext } from '../contexts/CartContextProvider'

import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import { Cart } from "@/components/Cart";

import { HomeContainer, ProductsContainer, MainContainer } from "./styles";

import { api } from "./api/axios";


interface IProduct {
  id: number,
  name: string,
  description: string,
  price: number,
  photo: string
}


interface HomeProps {
  products: IProduct[]
}


export default function Home({products}: HomeProps) {
  const [ showCart, setShowCart ] = useState(false)
  const { cart } = useContext(CartContext)
    
  return (
    <HomeContainer>
      <Cart openCart={setShowCart} showCart={showCart} />
      <Header openCart={setShowCart}/>
        <MainContainer>
          <ProductsContainer>
            {
              products.map(product => <ProductCard 
                                        key={product.id}
                                        id={product.id}
                                        name={product.name} 
                                        description={product.description}
                                        photo={product.photo}
                                        price={product.price}
                                        />)
            }
          </ProductsContainer>
        </MainContainer>
      <Footer />
    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const {data} = await api.get('',{params: {page: 1, rows: 8, sortBy: 'id', orderBy: 'DESC'}})

  const products = data.products.map((product: IProduct) => {
    const price = Number(product.price.toString().split('.')[0])

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: price,
      photo: product.photo
    }
  })

  return {
    props: {
      products
    },
  }
}