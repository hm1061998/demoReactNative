const initialState = {
    categories: [],
    loading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING':
            console.log("aa98")
            return {
                ...state,
                ... { loading: true }
            }
        case 'SUCCESS':
            console.log("data", action.payload)
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