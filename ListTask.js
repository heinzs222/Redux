import { useSelector } from "react-redux";






const ListTask = () => {
    const count = useSelector(state => state.count);
    const task = useSelector(state => state.task);

    
    
    return (
        <div>
            <h1 className="div1">{task}</h1>
        </div>
    )
}

export default ListTask;
