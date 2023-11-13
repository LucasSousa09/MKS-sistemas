import { useQuery } from 'react-query'
import {Container} from './styles'
import { api } from '@/pages/api/axios'
import Skeleton from 'react-loading-skeleton'
import { ProductCard } from '../ProductCard'

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
          isLoading ? skeletonArr.map(skeleton => <Skeleton />) :
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