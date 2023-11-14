import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { CartContext } from '../../contexts/CartContextProvider'

import { ProductCard } from '../ProductCard/index'

describe("ProductCard", () => {
    it("should render correctly", () => {
        render(<ProductCard id={1} name='Headset Cloud Stinger' description='O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.' photo='https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp' price={600} />)
        
        expect(screen.getByText("Headset Cloud Stinger")).toBeInTheDocument()
    })

    it("should call the function updateCart with the right parameters", () => {
        const updateCart = jest.fn()

        render(
            <CartContext.Provider value={{updateCart}}>
                <ProductCard id={1} name='Headset Cloud Stinger' description='O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.' photo='https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp' price={600} />
            </CartContext.Provider>
        )

        const button = screen.getByRole('button')
        fireEvent.click(button)

        expect(updateCart).toHaveBeenCalledWith({
            id: 1, 
            name:'Headset Cloud Stinger', 
            photo: 'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp',
            price: 600
        })
    })
})