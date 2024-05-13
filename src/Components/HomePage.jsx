import { useNavigate } from "react-router-dom"

export const HomePage = () => {
    const navigate = useNavigate();

    function markdownPageNavigate(){
        navigate("/markdowneditor")
    }
  return (
    <>
        <section className="flex justify-center items-center h-screen flex-col">
        <div>
            <h1 className="p-8 rounded-full bg-blue-200
            text-3xl font-bold">You Have no notes</h1>
        </div>
            <div className="button">
                <button className="rounded-full bg-blue-800 p-6
            text-lg mt-4  hover:bg-green-500 font-bold" onClick={markdownPageNavigate}>Add Notes</button>
            </div>
        </section>
    </>
  )
}
