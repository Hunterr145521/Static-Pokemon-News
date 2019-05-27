

const { createStore } = Redux;

const initState = {
  todo: [],
  post: []
};

function myreducer(state = initState, action){
  if(action.type == 'ADD_TODO'){
    return {
      todo: [...state.todos,action.todos]
    }
  }
}

const store = createStore(myreducer);

store.subscribe(()=> {
  console.log('Updated State');
  console.log(store.getState());
})

const todoAction = { type: "ADD_TODO", todo: "biu" };

store.dispatch(todoAction);

console.log("2");
console.log('3');