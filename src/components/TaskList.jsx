import Dots from "./icons/Dots"
function TaskList() {
  return (
    <section className="max-w[450px] m-auto pb-7 pt-1 px-4">
        <div className="flex justify-between items-center gap-4 my-4">
            <span className="cursor-pointer flex items-center">
                <input 
                type="checkbox"
                className="checkbox" />
            </span>
            <p className="text-left grow">
                NewTaskName
            </p>
            <span className="cursor-pointer">
                <Dots />
            </span>
        </div>
    </section>
  )
}

export default TaskList
