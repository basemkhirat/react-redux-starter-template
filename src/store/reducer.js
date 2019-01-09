const initalState = {
    message: "Hello World!",
};

const reducer = (state = initalState, action) => {

    switch (action.type) {

        case "CHANGE_MESSAGE":

            return {
                ...state,
                message: "Hello React!"
            }
            
    }

    return state;
};

export default reducer;