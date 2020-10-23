

const initialState = {
    dataCart: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            console.log("addd cart")
            return {
                ...state,
                dataCart: action.payload
            }
        default:
            return state
    }
}

export default reducer