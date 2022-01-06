import React from 'react'

function OnePostRightBar() {
    const parent ='bg-slate-100 h-max w-16 block'
    const barbox = 'grid grid-cols-1 col-span-2 gap-x-6 sticky'
    const gridcol = 'grid gap-4 items-center'
    const btnheart = 'flex-col items-center border-transparent bg-transparent fill-black cursor-pointer'
    const btnhearthover = 'p-2 hover:rounded-full hover:bg-red-700'
    const textspan = 'text-sm text-stone-600'
    return (
        <aside className={parent} >
            <div className={barbox} >
                <div className= {gridcol}>
                 <button className={btnheart} >
                     <span className={btnhearthover} >
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" class="crayons-icon">
                         <path d="M2.821 12.794a6.5 6.5 0 017.413-10.24h-.002L5.99 6.798l1.414 1.414 4.242-4.242a6.5 6.5 0 019.193 9.192L12 22l-9.192-9.192.013-.014z"></path>
                           </svg>
                     </span>
                     
                     <span className={textspan} > 9 </span>
                 </button>
                 <button>
                     <span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" class="crayons-icon">
                      <path d="M5.645 8.013c.013-.265-.261-.323-.4-.183-1.16 1.17-1.822 3.865-.344 7.32.294.961 1.938 3.19.84 6.131l-.003.006c-.094.255.206.404.366.263 1.395-1.226 1.933-3.593 1.1-6.375-.488-1.657-1.955-4.226-1.559-7.162zm-3.22 2.738c.05-.137-.124-.417-.326-.225-.939.893-1.316 2.863-.976 4.605.547 2.878 2.374 3.526 2.066 6.629-.028.102.176.38.348.154 1.546-2.033.409-4.453-.241-6.006-1.005-2.386-1.087-4.118-.871-5.157z" fill="#08090A"></path>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.622 7.223l8.579-3.68c.598-.256 1.087.547.6.985l-6.618 5.941c.881 2.043 2.738 6.34 2.931 6.775 1.348 3.031-2.055 4.918-3.807 3.583a7.027 7.027 0 01-.623-.574c-.974-.965-2.419-2.398-5.207-1.877.284-2.115-.313-3.737-.883-5.288-.38-1.032-.747-2.032-.837-3.124-.346-3.329 3.763-8.23 4.696-7.953.386.115.326 1.229.266 2.319-.051.948-.102 1.88.143 2.12.145.142.428.43.76.773zM11.5 16.5l2.5.5 2.5 2 1-.5-2-4.5-1.5-4-1.5-1-1-1-1-1.5L10 8l-.5 1.5 1 2.5 1 4.5z"></path>
                        </svg>
                     </span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" class="crayons-icon">
                       <path d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1z"></path>
                       </svg>
                     <span className={textspan}> 3 </span>
                 </button>

                 <button>
                     <span>

                     </span>
                  
                  <span className={textspan}> 5 </span>
                 </button>
                  
                </div>
            </div>
        </aside>
    )
}

export  {OnePostRightBar}