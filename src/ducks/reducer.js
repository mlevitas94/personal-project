const initialState = {
    books:[
        
    ]
}
const GET_BOOKS = 'GET_BOOKS'

export function getBooks(booksObj){
    return {
        type: GET_BOOKS,
        payload: booksObj
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_BOOKS:
            return {...state,books:payload}

        default:
            return state
    }
}