export const onloading = (payload) => ({
    type: "LOADING",
    payload
})
export const onsuccess = (payload) => ({
    type: "SUCCESS",
    payload
})
export const onerror = (payload) => ({
    type: "ERROR",
    payload
})