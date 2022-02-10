
/** Array of initialState (and add two hard coded elements) */

const initialState = [
    {
        id: "0",
        title: "This is the title of First Blog",
        catagory: "cat1",
        description: "This is the Description of the First Blog",
    },

    {
        id: "1",
        title: "This is the title of Second Blog",
        catagory: "cat2",
        description: "This is the Description of the Second Blog",
    },
];

const blogReducer = (state = initialState, action) => {
    switch(action.type){

        case "ADD_BLOG":
            state = [...state, action.payload];
            return state;

        case "UPDATE_BLOG":
            // first map the update state
            const updateState = state.map(blog => blog.id === action.payload.id ? action.payload : blog);
            
            state = updateState;
            return state;

        case "DELETE_BLOG":
            // filter all blogs here from the states of particular ids
            const filterBlogs = state.filter(blog => blog.id !== action.payload ? blog : null);
            state = filterBlogs;
            return state;

            /** Using Default is Necessary in Switch */
        default:
            return state;
    }
};

export default blogReducer;