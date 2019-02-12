const initialState = {
    books:[
        {
        id:1,
        title:'new title',
        price: 9.99
        },
        { 
         id:2,
        title:'fun fun',
        price:3.99}
    ]
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        default: return state
    }
}