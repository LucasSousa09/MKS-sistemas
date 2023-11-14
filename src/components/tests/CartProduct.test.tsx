import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { CartContext } from '../../contexts/CartContextProvider'

import { CartProduct } from '../CartProduct/index'

const updateCart = jest.fn()
const removeFromCart = jest.fn()
const decreaseOne = jest.fn()

const wrapper = ({children}: any) => (
    <CartContext.Provider value={{updateCart, removeFromCart, decreaseOne}}>
        {children}
    </CartContext.Provider>
)

describe("CartProduct", () => {
    it("should render correctly", () => {
        render(<CartProduct id={1} name='Headset Cloud Stinger' quantity={1} photo='https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp' price={600} />)
        
        expect(screen.getByText("Headset Cloud Stinger")).toBeInTheDocument()
    })

    it("should call the function updateCart with the right parameters", () => {

        render(<CartProduct id={1} quantity={1} name='Headset Cloud Stinger' photo='https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp' price={600} />, {wrapper})

        const button = screen.getByText('+')
        fireEvent.click(button)

        expect(updateCart).toHaveBeenCalledWith({id: 1})
    })

    it("should call the function decreaseOne with the right parameters", () => {

        render(<CartProduct id={1} quantity={1} name='Headset Cloud Stinger' photo='https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp' price={600} />, {wrapper})

        const button = screen.getByText('-')
        fireEvent.click(button)

        expect(decreaseOne).toHaveBeenCalledWith(1)
    })

    it("should call the function removeFromCart with the right parameters", () => {

        render(<CartProduct id={1} quantity={1} name='Headset Cloud Stinger' photo='https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp' price={600} />, {wrapper})

        const button = screen.getByTitle('closeButton')
        fireEvent.click(button)

        expect(decreaseOne).toHaveBeenCalledWith(1)
    })
})