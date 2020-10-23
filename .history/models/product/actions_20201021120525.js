export const onloadingproduct = () => ({
    type: "LOADING_PRODUCT",
})
export const onsuccessproduct = (payload) => ({
    type: "SUCCESS_PRODUCT",
    payload
})
export const onerrorproduct = (payload) => ({
    type: "ERROR_PRODUCT",
    payload
})