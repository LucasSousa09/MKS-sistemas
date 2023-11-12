import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";

import { HomeContainer, ProductsContainer, MainContainer } from "./styles";
import { Cart } from "@/components/Cart";
import { useState } from "react";

export default function Home() {
  const [ showCart, setShowCart ] = useState(false)
  
  return (
    <HomeContainer>
      <Cart openCart={setShowCart} showCart={showCart} />
      <Header openCart={setShowCart}/>
        <MainContainer>
          <ProductsContainer>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
          </ProductsContainer>
        </MainContainer>
      <Footer />
    </HomeContainer>
  )
}
