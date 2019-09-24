export default(state = [], payload) => {
    console.log(state)
    switch (payload.type) {
        case 'add':
            return [...state, payload.item];
        default:
            return state;
    }
};