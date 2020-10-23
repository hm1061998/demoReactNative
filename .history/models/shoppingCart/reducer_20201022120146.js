const initialState = {
    dataCart: []
}

const reducer = (state = initialState, action) => {
    const { dataCart } = state

    let newData = [...dataCart]


    switch (action.type) {
        case "ADD_TO_CART":
            const product = action.payload
            const index = dataCart.findIndex(item => item.id === product.id)
            // console.log("index", index)
            if (index < 0) {
                newData.push(action.payload)
            } else {
                newData[index].qty += 1
            }
            // console.log("data cart", newData)

            return {
                ...state,
                dataCart: newData
            }
        case 'DELETE_ITEM_FROM_CART':
            newData = dataCart.filter(item => item.id !== action.payload)
            console.log("newData", newData)
            return {
                ...state,
                dataCart: newData
            }
        default:
            return state
    }
}

export default reducer