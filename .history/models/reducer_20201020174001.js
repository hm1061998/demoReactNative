

const initialState = {
    dataCart: []
}

const reducer = (state = initialState, action) => {
    const { dataCart } = state
    switch (action.type) {
        case "ADD_TO_CART":
            let product = action.payload
            let index = dataCart.findIndex(item => item.id === product.id)
            console.log("index", index)
            // console.log("addd cart", action.payload)
            let newData = [...dataCart]
            newData.push(action.payload)
            return {
                ...state,
                dataCart: newData
            }
        default:
            return state
    }
}

export default reducer