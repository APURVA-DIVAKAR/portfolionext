

import React from "react";
import GitHubCalendar from "react-github-calendar";


function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc"
  };
  return (
   
    <div id='GithubStats' className='w-full lg:h-screen p-2 '>
           <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
             <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
             GitHub Calendar
            </p>
            <h2 className='py-4'>What I Have Contributed</h2>
    <div class="calendar" className='m-auto'>
      
      <GitHubCalendar
        username="APURVA-DIVAKAR"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
      </div>
      </div>
      </div>
   
  );
}

export default Github;
