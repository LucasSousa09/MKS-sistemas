import { useQuery } from 'react-query'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { api } from '@/pages/api/axios'

import { ProductCard } from '../ProductCard'

import {Container} from './styles'


interface IProduct {
    id: number,
    name: string,
    description: string,
    price: number,
    photo: string
  }

export function ProductsContainer(){
    const skeletonArr = [1,2,3,4,5,6,7,8]

    const {data, isLoading} = useQuery({
        queryFn: () => api.get('',{params: {page: 1, rows: 8, sortBy: 'id', orderBy: 'DESC'}}),
        queryKey: ["qproducts"]
      })

    return (
        <Container>
        {
          isLoading ? skeletonArr.map(skeleton => <Skeleton height={285} width={218} />) :
          data?.data.products.map((product: IProduct) => <ProductCard 
                                    key={product.id}
                                    id={product.id}
                                    name={product.name} 
                                    description={product.description}
                                    photo={product.photo}
                                    price={product.price}
                                    />)
        }
      </Container>        
    )
}