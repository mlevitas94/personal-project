const initialState = {
    books:[],
    loggedUser:{}
}
const GET_BOOKS = 'GET_BOOKS'
const UPDATE_USER = 'UPDATE_USER'

export function getBooks(booksObj){
    return {
        type: GET_BOOKS,
        payload: booksObj
    }
}

export function updateUser(userobj){
    return {
        type: UPDATE_USER,
        payload: userobj
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_BOOKS:
            return {...state,books:payload}
        
        case UPDATE_USER:
            return {...state, loggedUser:payload}    

        default:
            return state
    }
}