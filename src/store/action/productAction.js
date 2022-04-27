

// method produk to cart
export const addCart = id => {
    return {
        type: "ADD_TO_CART",
        payload: id

    }
}

export const tambah = id => {
    return {
        type: "TAMBAH",
        payload: id

    }
}

export const kurangi = id => {
    return {
        type: "KURANGI",
        payload: id

    }
}
