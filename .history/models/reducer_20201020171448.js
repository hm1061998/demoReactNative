

const initialState = {
    dataCart: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            console.log("addd cart", action.payload)
            let newData = [...state.dataCart]
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