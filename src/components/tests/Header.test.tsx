import { fireEvent, render, screen } from '@testing-library/react'
import { Header } from '../Header/index'
import '@testing-library/jest-dom'

import React, { useContext as useStateMock } from 'react'
import { CartContextProvider } from '@/contexts/CartContextProvider'

describe("Header", () => {
    it("should render correctly", () => {
        render(<Header />)
        expect(screen.getByText("MKS")).toBeInTheDocument()
        expect(screen.getByText("Sistemas")).toBeInTheDocument()
        expect(screen.getByRole("button")).toBeInTheDocument()
    })
    
    it('should call the openCart funtion on click', () => {
        const setStateMock  = jest.fn()
        const useStateMock: any = (useState: any) => [useState, setStateMock]
        jest.spyOn(React, 'useState').mockImplementation(useStateMock)

        render(
            <CartContextProvider>
                <Header />
            </CartContextProvider>
        )

        const button = screen.getByRole("button")
        fireEvent.click(button)

        expect(setStateMock).toHaveBeenCalledWith(true)
    })
})