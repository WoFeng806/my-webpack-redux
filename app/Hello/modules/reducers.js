const initState = {
	title: "Hello world"
}

function hello(state = initState, action) {
    switch (action.type) {
        case "HELLO_changeHeader":
			return {
                ...state,
				title: action.value
			}
        default:
            return state
    }
    return state
}

export default hello
