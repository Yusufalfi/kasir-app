import { products } from "../../utils/data"

const initialState ={
    products: products,
    carts: []
}

// membuat function untuk reducer
const productReducer = (state = initialState, action) => {
    // destruct type dan payload
    const {type, payload} = action
    // bikin switch untuk cek typenya
    switch(type){
        default:
            return state
        case "ADD_TO_CART":
            // cek produk ini sudah di dalam cart / blom
            const productInCart =  state.carts.find(item =>  item.id === payload )
            // tambahkan data product kecart
            const newItemCart = state.products.find(item => item.id ===payload)
            //jika produkinchart blom ada maka tambah 
            if(!productInCart) {
                return {
                    ...state,
                    carts: [...state.carts, newItemCart ]
                }
            
            } else {
                return state
            }

        case "TAMBAH":
            // ambil harganya
            const originalPrice = state.products.find(item => item.id === payload).price
            console.log(originalPrice)
            //cek itemyg berubah harganya
            const incCarts = state.carts.map(item => {
                if(item.id === payload) {
                    return {
                        ...item,
                        price: item.price + originalPrice
                       
                    }
                  
                } else {
                   return item  
                 }
                 })
             
                    return {
                    ...state,
                    carts:incCarts
                }

                case "KURANGI":
                    // ambil harganya
                    const oriPrice = state.products.find(item => item.id === payload).price
                    // console.log(originalPrice)
                    //cek itemyg berubah harganya
                    const decCarts = state.carts.map(item => {
                        if(item.id === payload) {
                            return {
                                ...item,
                                price: item.price - oriPrice
                               
                            }
                          
                        } else {
                           return item  
                         }
                         })
                     
        
                            return {
                            ...state,
                            carts:decCarts
                        }
                case "HAPUS":
                    return {
                        ...state,
                        carts: state.carts.filter(item =>item.id !== payload)
                    } 
                    
                case "RESET": 
                return {
                    ...state,
                    cart:[]
                }
     
    }
}

export default productReducer