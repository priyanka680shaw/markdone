import { useState } from "react"

export const MarkdownPage = () => {
    const [notes , setNotes] = useState();
    const [allNotes , setAllNotes] = useState([]);
    function addNotes(){
        const obj = {
            array : notes,
            delete  : "⛔"
        }

        console.log(obj.array , "val")
        setAllNotes([...allNotes , obj]);
    }

    function markdoneText(e){
        const text = e.target.value;
        console.log(text)
        setNotes(text);
    }
    console.log(notes)
    return (
        <section className="flex">
            <div className="left overflow-auto w-1/5 h-screen border-8 ">
                <div className="w-full bg-blue-700 p-6 text-3xl font-bold h-24 flex justify-around"> Notes <span className="text-3xl font-bold text-white cursor-pointer" onClick={addNotes}>✅</span></div>
                <div >{
                    allNotes.map((items , idx)=>{
                        return(
                            <div className="w-full bg-blue-700 p-6 font-bold flex justify-around mt-2" key={idx}>
                             <p key={idx}>{items.array}</p>
                             <button>
                                {items.delete}
                             </button>
                            </div>
                           
                        )
                    })
                }</div>
            </div>
            <div className="right  w-4/5 h-screen border-8 overflow-y-auto overflow-x-hidden">
                    <textarea className="bg-blue-100 p-8" cols={163} rows={29}  onChange={markdoneText}> Start writing</textarea>
            </div>
        </section>
    )
}
