savcomnote()
savnote()

let addtask = document.getElementById('task-btn')
addtask.addEventListener("click", () => {
    let note;
    let tsktxtval = document.getElementById('task-text').value;
    if (tsktxtval != '') {
        let notes = localStorage.getItem('notes');
        if (notes == null) {
            note = [];
        } else {
            note = JSON.parse(notes)
        }
        note.push(tsktxtval)
        localStorage.setItem('notes', JSON.stringify(note))
        document.getElementById('task-text').value = "";

        savnote()
    } else {
        alert('Please write your task')
    }

})

function savnote() {
    let note;
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        note = [];
    } else {
        note = JSON.parse(notes)
    }
    let html = '';
    // ## if we write 'let html' so we see undefined but we write "let html = ''"
    Array.from(note).map((elem, ind) => {
        html += `<div>
        <input type="checkbox" name="" id="${ind}" value="${elem}" onclick="comtask(${ind})"> 
        <span id="${ind}">${elem}</span>
        </div>`
    })

    let inctask = document.getElementById('incom-task')
    if (note.length != 0) {
        inctask.innerHTML = html;
    } else {
        inctask.innerHTML = "<b> Nothing is show.<br/> Please enter your incomplete task</b>"
    }
}

function comtask(a) {
    let note;
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        note = [];
    } else {
        note = JSON.parse(notes)
    }
    // ---------------------------------------
    let comnote;
    let comnotes = localStorage.getItem('comnotes');
    if (comnotes == null) {
        comnote = [];
    } else {
        comnote = JSON.parse(comnotes)
    }
    let fehcomnote = note[a];
    comnote.push(fehcomnote)
    localStorage.setItem("comnotes", JSON.stringify(comnote));
    savcomnote()
    // ---------------------------------------
    note.splice(a, 1)
    localStorage.setItem('notes', JSON.stringify(note))
    savnote()
}

function savcomnote() {
    let comnote;
    let comnotes = localStorage.getItem('comnotes');
    if (comnotes == null) {
        comnote = [];
    } else {
        comnote = JSON.parse(comnotes)
    }
    let html2 = '';
    // ## if we write 'let html2' so we see undefined but we write "let html2 = ''"
    Array.from(comnote).map((elem, ind) => {
        html2 += `<div>
        <span id="${ind}">${elem}</span>
        <button class="delbtn" onclick="delcom(${ind})">Delete</button> 
        </div>`

    })
    let comtask = document.getElementById('com-task')
    if (comnote.length != 0) {
        comtask.innerHTML = html2;
    } else {
        comtask.innerHTML = "<b> Nothing is show.<br/> Please enter your complete task</b>"
    }


}
function delcom(a) {
    let comnote;
    let comnotes = localStorage.getItem('comnotes');
    if (comnotes == null) {
        comnote = [];
    } else {
        comnote = JSON.parse(comnotes)
    }
    comnote.splice(a, 1)
    localStorage.setItem('comnotes', JSON.stringify(comnote))
    savcomnote()
}



