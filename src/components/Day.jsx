import ArrowL from "./icons/ArrowL"
import ArrowR from "./icons/ArrowR"
function Day() {
  return (
    <section className="flex justify-center items-center gap-8 my-20 [&>p]:text-gray-500">
        <p className="cursor-pointer">
            <ArrowR/>
        </p>
        <div className="w-[155px]">
            <h4 className="text-4xl font-medium">
            Thursday
            </h4>
            <p>December 26,2024</p>
        </div>
        <p className="cursor-pointer">
            <ArrowL/>
        </p>
    </section>
  )
}

export default Day
