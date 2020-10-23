const initialState = {
    products: [],
    loading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                ... { loading: true }
            }
        case 'SUCCESS':
            return {
                ...state,
                ...{
                    loading: false,
                    products: action.payload
                }
            }
        case 'ERROR':
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