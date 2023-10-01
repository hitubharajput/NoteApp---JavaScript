const addbtn = document.querySelector('#addbtn')
const main = document.querySelector("#main")
addbtn.addEventListener(
    "click",
    function(){
        addNote()
    }
) 

const addNote = (text="")=>{
    const note = document.createElement("div")
    note.classList.add("note")
    note.innerHTML = `
            <div class="toolbar">
                <i class="save bi bi-floppy-fill"></i>
                <i class="trash bi bi-trash"></i>
            </div>
            <textarea>${text}</textarea> ` ;

            note.querySelector(".trash").addEventListener(
                "click",
                function() {
                    note.remove() 
                } 
            )

            note.querySelector(".save").addEventListener(
                "click",
                function(){
                    saveNotes() ;
    
                }
            )
            note.querySelector("textarea").addEventListener(
                "focusout",
                saveNotes()
            )


            main.appendChild(note) ;
            saveNotes()

}
 

const saveNotes = ()=>{
  
    const notes = document.querySelectorAll(".note textarea") ;
    const data = [] ;

    notes.forEach(
        (note)=>{
            data.push(note.value)
        }
    )
    if(data.length===0){
        localStorage.removeItem("notes")
    }else{
        localStorage.setItem("notes",JSON.stringify(data))
    }
    localStorage.setItem("notes",JSON.stringify(data))

   
}


(
    function()
    {
     const lsnotes = JSON.parse(localStorage.getItem("notes"));
     if(lsnotes === null){
        addNote()
     }else{
        lsnotes.forEach(
            (lsNote)=>{
                addNote(lsNote) 
            }
         )
     }
 
    }
 )()