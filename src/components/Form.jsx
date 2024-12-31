import TextL from "./icons/TextL"
function Form() {
  return (
    <section className="max-w-[450px] m-auto my-3 px-4">
        <div className="border border-black rounded bg-slate-600 flex">
            <span className="text-gray-400 mr-4">
                <TextL/>
            </span>
            <form className="w-full">
                <input
                className="w-full bg-transparent focus:outline-none text-gray-400"
                 type="text" 
                 placeholder="Add Task"/>
                
            </form>
        </div>
    </section>
  )
}

export default Form
