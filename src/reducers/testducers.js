import * as types from '../api/string';

const initialState = [
        {
            text: 'Item 00',
            id: 0

        },
        {
            text: 'Item 01',
            id: 1

        },
        {
            text: 'Item 03',
            id: 2

        },

];

export default (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TODO:
            console.log('hungit')
            break;
        default:
            return state;
    }
};