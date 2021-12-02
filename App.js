import './App.css';
import {createStore} from "redux";
import {Provider} from "react-redux";
import Task from './Task';
import taskReducer from "./JS/Reducers/taskReducer" ;


let store = createStore(taskReducer);


function App() {
  return (
    <Provider store={store}>
      <Task />
    </Provider>
  );
}

export default App;
// component={descriptionPage}