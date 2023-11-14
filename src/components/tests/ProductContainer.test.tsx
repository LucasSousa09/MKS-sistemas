import { render, screen } from '@testing-library/react'
import { ProductsContainer } from '../ProductsContainer'
import '@testing-library/jest-dom'

import { QueryClient, QueryClientProvider } from 'react-query'
import { useProductsQuery } from '../../hooks/useProductsQuery'
import React from 'react'

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

describe("ProductsCardContainer", () => {
    it("Displays the skeletons when isLoading", () => {
        (mockedUseProductsQuery as jest.Mock).mockImplementation(() => ({
          isLoading: true,
        }));
        render(<ProductsContainer />, { wrapper });

        const mainContainer = screen.getByRole('main')

        expect(mainContainer.firstChild?.firstChild).toHaveClass('react-loading-skeleton')
      });

      it("Displays the skeletons when isLoading", () => {
        (mockedUseProductsQuery as jest.Mock).mockImplementation(() => ({
          status: 'error',
        }));
        render(<ProductsContainer />, { wrapper });

        expect(screen.getByText('Infelizmente não foi possível carregar os Produtos')).toBeInTheDocument()

      });

      it("should render users list", () => {
        (mockedUseProductsQuery as jest.Mock).mockImplementation(() => ({
          status: "success",
          data: {
            data: {
                products: [
                {   
                    id: 1,
                    name: 'Headset Cloud Singer',
                    description: "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.",
                    photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
                    price: "600.00"
                },
                {   
                    id: 2,
                    name: "Headset Cloud Revolver",
                    description: "A linha HyperX Cloud Revolver foi projetada para atender as exigências dos gamers de PC ou de console.",
                    photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperx-cloudrevolver.webp",
                    price: "1000.00"
                }
              ]}
            }
        }));
        render(<ProductsContainer />, { wrapper });

        expect(screen.getByText('Headset Cloud Singer')).toBeInTheDocument()
        expect(screen.getByText('Headset Cloud Revolver')).toBeInTheDocument()
      });
})