export const onloading = () => ({
    type: "LOADING",
})
export const onsuccess = (payload) => ({
    type: "SUCCESS",
    payload
})
export const onerror = (payload) => ({
    type: "ERROR",
    payload
})