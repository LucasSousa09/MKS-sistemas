import { render, screen } from '@testing-library/react'
import { Footer } from '../Footer/index'
import '@testing-library/jest-dom'


describe("Footer", () => {
    it("should render correctly", () => {
        render(<Footer />)
        expect(screen.getByText("MKS sistemas © Todos os direitos reservados")).toBeInTheDocument()
    })
})