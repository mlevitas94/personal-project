const initialState = {
    books:[],
    loggedUser:{},
    admins:[]
}
const GET_BOOKS = 'GET_BOOKS'
const UPDATE_USER = 'UPDATE_USER'
const GET_ADMINS = 'GET_ADMINS'

export function getBooks(booksObj){
    return {
        type: GET_BOOKS,
        payload: booksObj
    }
}

export function getAdmins(adminsObj){
    return {
        type: GET_ADMINS,
        payload: adminsObj
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
        case GET_ADMINS:
            return {...state,admins:payload}
        
        case GET_BOOKS:
            return {...state,books:payload}
        
        case UPDATE_USER:
            return {...state, loggedUser:payload}    

        default:
            return state
    }
}