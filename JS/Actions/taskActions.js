// const addtask = () => {
//     return {
//         type:"addtask",
//         payload : "task one - two - three ..."
//     }
// }

// export {addtask} ;




const increment = () => {
    return {
      type:"INC",
      payload: 1
    }
  }
  const decrement = (num) => {
    return {
      type:"DEC",
      payload: num ? num : 1
    }
  }

  export {increment , decrement};