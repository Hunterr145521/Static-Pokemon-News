const initState  = {
    post : [
        {id:'1' , title: 'New Game is There !!', body: 'Pokemon lets go pikachus is now online and is been available for nintendo Switch go play now!'},
        {id:'2' , title: 'Some Major Updates are there!!', body: 'Some Major updates with new pokemon is been there but for pc there are no such game '},
        {id:'3' , title: 'Pokemon Can now be accesed on pc perfectly !!', body: 'The new game can be played on nintendo switch emulator i.e. YuZu and now the rendering problem for pc is been fixed slightly'}
    ]
}

const rootReducers = (state = initState, action) => {
    console.log(action);
    if(action.type === 'DELETE_POST') {
        let newPost = state.post.filter(posts => {
            
            return action.id !== posts.id
            
        });
        console.log(newPost);
        return{
            ...state,
            post: newPost
        }
        
        
    }
    
    return state;
}
export default rootReducers;