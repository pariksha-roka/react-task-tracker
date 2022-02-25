import Task from './Task'

// pass in tasks and onDelete as a prop
const Tasks = ({
    tasks,
    onDelete,
    onToggle
  }) => {

    return ( <> {
        /* looping through the task */
      } {
        tasks.map((task) => (
          // pass in each task as a prop
          <
          Task key = {
            task.id
          }
          task = {
            task
          }
          onDelete = {
            onDelete
          }
          onToggle = {
            onToggle
          }
          />
        ))
      } </>)
    }

    export default Tasks