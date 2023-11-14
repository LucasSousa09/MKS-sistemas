import { fireEvent, render, screen } from '@testing-library/react'
import { Cart } from '../Cart/index'
import '@testing-library/jest-dom'

import React, { useContext as useStateMock } from 'react'
import { CartContextProvider } from '@/contexts/CartContextProvider'

const wrapper = ({children}: any) => (
    <CartContextProvider>
        {children}
    </CartContextProvider>
)

describe("Cart", () => {
    it("should render correctly", () => {
        render(<Cart/>, {wrapper})
        expect(screen.getByText("Carrinho de compras")).toBeInTheDocument()
        expect(screen.getByText("Total:")).toBeInTheDocument()
        expect(screen.getByText("Finalizar Compra")).toBeInTheDocument()
    })
    
    it('should call the openCart funtion on click', () => {
        const setStateMock  = jest.fn()
        const useStateMock: any = (useState: any) => [useState, setStateMock]
        jest.spyOn(React, 'useState').mockImplementation(useStateMock)

        render(<Cart/>, {wrapper})

        const button = screen.getByTitle("closeCartButton")
        fireEvent.click(button)

        expect(setStateMock).toHaveBeenCalledWith('false')
    })
})