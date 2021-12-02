import { useSelector,useDispatch } from "react-redux";
//import { addtask } from "./JS/Actions/taskActions";
import {increment,decrement} from "./JS/Actions/taskActions";



const Addtask = () => {
    // const task = useSelector(state => state.task);
    // const dispatch = useDispatch();


    const dispatch = useDispatch();

    return (
        <div>
            <h1>Add Task</h1>
                <div className="mb-3">
                <label className="form-label">Please Add The Title of Your New Task</label><br/>
                <input className="form-control" type="text" id="inputTask" />
                </div>
                <button onClick={()=> dispatch(increment())}  className="btn btn-primary" > ADD TASK </button>

        </div>
    )
}

export default Addtask
