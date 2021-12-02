 import Addtask from "./Addtask";
 import ListTask from "./ListTask";

 const Task = () => {
    return (
        <div className="container">
            <Addtask/>
            <hr/>
            <ListTask/>
        </div>
    )
}

export default Task;