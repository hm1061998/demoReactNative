const initialState = {
    dataCart: []
}

const reducer = (state = initialState, action) => {
    const { dataCart } = state
    switch (action.type) {
        case "ADD_TO_CART":
            let product = action.payload
            let newData = [...dataCart]

            let index = dataCart.findIndex(item => item.id === product.id)
            // console.log("index", index)
            if (index < 0) {
                newData.push(action.payload)
            } else {
                newData[index].qty++
            }
            // console.log("data cart", newData)

            return {
                ...state,
                dataCart: newData
            }
        default:
            return state
    }
}

export default reducer