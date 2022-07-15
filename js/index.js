function showAboutEditables() {
    document.getElementById("editable-name").style.display ="inline"
    document.getElementById("editable-title").style.display ="inline"
    document.getElementById("editable-description").style.display ="inline"
    document.getElementById("editable-img").style.display ="inline"
}

function showEditOption(element){
    document.getElementById(element).style.display = "inline"
}

function editElement(input,field) {
    let newText = document.getElementById(input).value;
    if (newText !== "") {
        document.getElementById(field).innerText = newText
    }

    document.getElementById(input).style.display ="none"
    document.getElementById("submit-description").style.display ="none"
    
}

function showProjectEditables(number) {
    document.getElementById("project-upload-img-" + number).style.display ="inline"
    document.getElementById("project-edit-title-" + number).style.display ="inline"
    document.getElementById("project-edit-text-" + number).style.display ="inline"
    document.getElementById("project-edit-link-" + number).style.display ="inline"
}

function removeSection(section) {
    let projectsList = document.getElementById("project").getElementsByTagName("ol")[0]
    let projectToRemove = projectsList.getElementsByTagName('li')[section]
    var removedProject = projectsList.removeChild(projectToRemove)
    return(removedProject)
}



