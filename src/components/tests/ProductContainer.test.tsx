import { render, screen } from '@testing-library/react'
import { ProductsContainer } from '../ProductsContainer'
import '@testing-library/jest-dom'

import { QueryClient, QueryClientProvider } from 'react-query'
import { useProductsQuery } from '../../hooks/useProductsQuery'

const mockedUseProductsQuery = useProductsQuery
jest.mock('../../hooks/useProductsQuery')

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false
        }
    }
})

const wrapper = ({children}: any) => (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
)

export default wrapper

describe("ProductsCardContainer", () => {
    it("Displays the loading view", () => {
        mockedUseProductsQuery.mockImplementation(() => ({
          status: "loading",
        }));
        render(<ProductsContainer />, { wrapper });
      });
    
})