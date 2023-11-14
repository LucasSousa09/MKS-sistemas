import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { ProductCard } from '../ProductCard'

import {Container} from './styles'
import { useProductsQuery } from '@/hooks/useProductsQuery'


interface IProduct {
    id: number,
    name: string,
    description: string,
    price: number,
    photo: string
  }

export function ProductsContainer(){
    const skeletonArr = [1,2,3,4,5,6,7,8]

    const { data, isLoading, status } = useProductsQuery()

    return (
        <Container>
        {
          isLoading ? skeletonArr.map(skeleton => <Skeleton key={skeleton}  height={285} width={218} />) :
          status === 'success' ? (data?.data.products.map((product: IProduct) => <ProductCard 
                                    key={product.id}
                                    id={product.id}
                                    name={product.name} 
                                    description={product.description}
                                    photo={product.photo}
                                    price={product.price}
                                    />)) :
          status === 'error' && <h1>Infelizmente não foi possível carregar os Produtos</h1>

        }
      </Container>        
    )
}