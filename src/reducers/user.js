export default (state = {}, action) => {
    switch (action.type) {
        case 'SET_USER':
            return action.user;
        case 'RESET_USER':
            return {};
        default:
            return state;
    }
};