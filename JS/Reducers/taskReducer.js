// const initialState = {
//     task : "Zero Task",
// };

// const task = (state = initialState,action) => {

//     switch(action.type){
//         case "addtask": return {
//             ...state,
//             task : state.task + action.payload,
//         }
//     }

// }

// export default task;




const initialState = {
    count:0,
    task : "Task "
};



const counter = (state = initialState,action) =>{

    switch(action.type){
      case "INC": return {
          ...state,
          count : state.count  + action.payload,
          task : state.task  +  "task " + state.count + " -- ",
      };
      case "DEC": return {
        ...state,
        count : state.count - action.payload,
        };
      default : return state;
    }
  
  };

  export default counter;