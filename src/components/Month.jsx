
function Month() {
  return (
    <section className="p-4">
    <div className="border border-black rounded bg-gray-500 p-2 text-left mb-2 flex justify-between gap-2">
        <div className="bg-gray-600 p-1 rounded min-w[78px] text-center h-fit">
            <span className="text-4xl">
                JUL
            </span>

                <span 
                style={{writingMode:"vertical-lr"}}
                className="text-xs font-medium">
                    2023
                </span>
        </div>
        <div className="flex flex-wrap gap-1 justify-end">
            <span className="border border-black px-2 rounded bg-gray-400 inline-block h-fit">
                task one
            </span>
            <span className="border border-black px-2 rounded bg-gray-400 inline-block h-fit">
                task one
            </span>
            <span className="border border-black px-2 rounded bg-gray-400 inline-block h-fit">
                task one
            </span>
            <span className="border border-black px-2 rounded bg-gray-400 inline-block h-fit">
                task one
            </span>
            

        </div>
    </div>

</section>
  )
}

export default Month
