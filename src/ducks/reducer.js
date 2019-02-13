const initialState = {
    books:[
        {
        id:1,
        title:'yemen',
        price: 9.99
        },
        { 
         id:2,
        title:'Who is this clown',
        price:3.99}
    ]
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        default: return state
    }
}