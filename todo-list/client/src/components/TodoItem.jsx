/* eslint-disable react/prop-types */
import { useState } from "react";
export default function TodoItem({ data }) {
    const [isCompleted, setIsCompleted] = useState(data.isCompleted);


    function onChangeStatus() {
        setIsCompleted(state => !state);
    }
    return (
        <tr className={"todo " + (isCompleted ? "is-completed" : '')}>
            <td>{data.text}</td>
            <td>{isCompleted ? 'Complete' : 'Incomplete'}</td>
            <td className="todo-action">
                <button onClick={onChangeStatus} className="btn todo-btn">Change status</button>
            </td>
        </tr>
    )
}