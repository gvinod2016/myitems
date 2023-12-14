
const initialState = {
    totalCount: 0
}
const COUNT_ADD = 'count/add'
const COUNT_REMOVE = 'count/remove'

export const addCount = (payload) => ({
    type: COUNT_ADD,
    payload: payload
})
export const removeCount = (payload) => ({
    type: COUNT_REMOVE,
    payload: payload
})
export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case COUNT_ADD: {
            return {
                totalCount:state.totalCount + action.payload
            }
        }
        case COUNT_REMOVE: {
            return {
                totalCount:state.totalCount - action.payload
            }
        }
        default:
            return state
    }
}