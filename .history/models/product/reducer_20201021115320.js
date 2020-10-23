const initialState = {
    categories: [],
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
                    categories: action.payload
                }
            }
        case 'ERROR':
            return {
                ...state,
                ... {
                    loading: false,
                    categories: [],
                    error: action.payload
                }
            }
        default: return state
    }
}

export default reducer