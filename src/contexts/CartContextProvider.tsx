import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react'

interface ICartItem{
    id: number,
    name: string,
    price: number,
    photo: string,
    quantity: number
}

interface UpdateCartProps {
    id: number
    name?: string ,
    price?: number,
    photo?: string,
}

interface CartContextProps{
    cart: ICartItem[]
    setCart: Dispatch<SetStateAction<ICartItem[]>>
    openCart: boolean
    setOpenCart: Dispatch<SetStateAction<boolean>>
    updateCart: (props: UpdateCartProps) => void
    removeFromCart: (id: number) => void
    decreaseOne: (id: number) => void
}

interface CartContextProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({children}: CartContextProviderProps){
    const [ cart, setCart ] = useState<ICartItem[]>([])
    const [openCart, setOpenCart] = useState(false)

    function updateCart({id, name, photo, price}: UpdateCartProps) {
        const hasProduct = cart.find( cartItem => cartItem.id === id)

        
        if(hasProduct === undefined){
            if(name !== undefined && photo !== undefined && id !== undefined && price !== undefined){
                setCart(state => [...state, {id, name, photo, price, quantity: 1}])
                return
            }
        }
        
        
        setCart((state) => {
            return state.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1}
            }
                return item
            })
        })
        
    }

    function decreaseOne(id: number){
        setCart((state) => {
            return state.map((item) => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1}
            }
            return item
            })
        })
    }

    function removeFromCart(id: number){
        setCart((state) => state.filter((cartItem) => cartItem.id !== id))
    }

    return (
        <CartContext.Provider value={{cart, setCart, updateCart, removeFromCart, decreaseOne, setOpenCart, openCart}}>
            {children}
        </CartContext.Provider>
    )
}