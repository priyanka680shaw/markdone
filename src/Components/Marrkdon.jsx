import { useState } from "react"

import Markdown from 'marked-react';
export const Marrkdon = () => {
    const [markdownText , setMarkdown] = useState()
    function markdownTextHandler(e){
        setMarkdown(e.target.value)
    }
  return (

   <>
   <h1 className="text-3xl text-center font-bold p-4">Markdown</h1>
    <section className='flex'>

    <div className="left overflow-auto w-[50%] h-screen border-8 "><Markdown>{markdownText}</Markdown></div>
    <div className="right  w-[50%] h-screen border-8 overflow-y-auto overflow-x-hidden">
                    <textarea className="bg-blue-100 p-8" cols={163} rows={25} onChange={markdownTextHandler}> Start writing</textarea>
            </div>
    </section>
   </>
  )
}
