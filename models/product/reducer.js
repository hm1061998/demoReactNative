const initialState = {
    products: [],
    loading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING_PRODUCT':
            return {
                ...state,
                ... { loading: true }
            }
        case 'SUCCESS_PRODUCT':
            return {
                ...state,
                ...{
                    loading: false,
                    products: action.payload
                }
            }
        case 'ERROR_PRODUCT':
            return {
                ...state,
                ... {
                    loading: false,
                    products: [],
                    error: action.payload
                }
            }
        default: return state
    }
}

export default reducer