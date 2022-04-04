import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text === "" || day === "") {
            alert("Please enter a task and day");
            return;
        } else {
            onAdd({ text, day, reminder });
        }

        setText("");
        setDay("");
        setReminder(false);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="task">Task</label>
                <input 
                    type="text"
                    id="task"
                    name="task"
                    placeholder="Add Task"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="day">Day & Time</label>
                <input 
                    type="text" 
                    id="day" 
                    name="day" 
                    placeholder="Add Day & Time"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input
                    type="checkbox"
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.target.checked)}
                />
            </div>

            <input type="submit" value="Save Task" className="btn btn-block" />
        </form>
    )
}

export default AddTask