const initState = {
    loggedIn: false,
};

const Reducer = (state = initState, action) => {
    switch(action.type){
        case 'login':
            return{
                ...state, loggedIn:true,
            };
            default:
                return initState;
    }
};

export default Reducer;