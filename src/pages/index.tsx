import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cart } from "@/components/Cart";

import { HomeContainer, MainContainer } from "../styles/styles";

import { ProductsContainer } from "@/components/ProductsContainer";


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


export default function Home() {
  return (
    <HomeContainer>
      <Cart />
      <Header />
        <MainContainer>
          <ProductsContainer/>
        </MainContainer>
      <Footer />
    </HomeContainer>
  )
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const {data} = await api.get('',{params: {page: 1, rows: 8, sortBy: 'id', orderBy: 'DESC'}})

//   const products = data.products.map((product: IProduct) => {
//     const price = Number(product.price.toString().split('.')[0].replace(/\s/g,''))

//     return {
//       id: product.id,
//       name: product.name,
//       description: product.description,
//       price: price,
//       photo: product.photo
//     }
//   })

//   return {
//     props: {
//       products
//     },
//   }
// }