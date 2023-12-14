const initialState = {
    searchData : " ",
    count: 0

}

const COUNT_ADD = 'count/add'
const COUNT_REMOVE = 'count/remove'
const SEARCH_DATA = "search/data"



export const addCount = (payload) => ({
    type: COUNT_ADD,
    payload: payload
})

export const removeCount = (payload) => ({
    type: COUNT_REMOVE,
    payload: payload
})


export const searchBtn = (payload)=>({
    type : SEARCH_DATA,
    payload : payload
})

export default function appReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        // Do something here based on the different types of actions
        case COUNT_ADD: {
            // We need to return a new state object
            console.log(state, action, 'state, action1')
            return {

                count: state.count + action.payload
            }
        }
        case COUNT_REMOVE: {
            // We need to return a new state object
            console.log(state, action, 'stateDec, actionDec2')

            return {
                count: state.count - action.payload 
            }
        }
        case SEARCH_DATA: {
            // We need to return a new state object
            console.log(state, action, 'stateDec, actionDec3')
            
                {return{...state, searchData:action.payload}}
        }
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
}