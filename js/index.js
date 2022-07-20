function showAboutEditables() {
    document.getElementById("editable-name").style.display ="inline"
    document.getElementById("editable-title").style.display ="inline"
    document.getElementById("editable-description").style.display ="inline"
    document.getElementById("editable-img").style.display ="inline"
    document.getElementsByClassName('edit-about-button')[0].classList.toggle('invisible')
}

function notShowAboutEditables() {
    document.getElementById("editable-name").style.display ="none"
    document.getElementById("editable-title").style.display ="none"
    document.getElementById("editable-description").style.display ="none"
    document.getElementById("editable-img").style.display ="none"
    editElement('about-description-input', 'about-description-text', 'submit-description')
    document.getElementsByClassName('edit-about-button')[0].classList.toggle('invisible')
}

function showEditOption(element){
    document.getElementById(element).style.display = "inline"
}

function editElement(input,field, submit) {
    let newText = document.getElementById(input).value;
    if (newText !== "") {
        document.getElementById(field).innerText = newText
    }

    document.getElementById(input).style.display ="none"
    document.getElementById(submit).style.display ="none"
    
}

function showProjectEditables(number) {
    document.getElementById("project-upload-img-" + number).style.display ="inline"
    document.getElementById("project-edit-title-" + number).style.display ="inline"
    document.getElementById("project-edit-text-" + number).style.display ="inline"
    document.getElementById("project-edit-link-" + number).style.display ="inline"
    document.getElementById('project-accept-changes-' + number).classList.toggle('invisible')
}

 function notShowProjectEditables(number) {
     document.getElementById("project-upload-img-" + number).style.display ="none"
     document.getElementById("project-edit-title-" + number).style.display ="none"
     document.getElementById("project-edit-text-" + number).style.display ="none"
     document.getElementById("project-edit-link-" + number).style.display ="none"
     editElement('project-description-input', 'project-text-one','submit-project-description')
     document.getElementById('project-accept-changes-' + number).classList.toggle('invisible')
 }

function removeSection(section) {
    document.getElementById("project-" + section).style.display = "none"
}

function changeLink(link){
    let parentButton = document.getElementById("button-link-" + link)
    let originalLink = parentButton.getElementsByTagName("a")[0]
    let inputField = document.getElementById("project-link-input-" + link)
    let newURL = inputField.value;
    originalLink.setAttribute('href',newURL)
    inputField.style.display ="none"
    
}

/* Sortable.create(document.getElementById('projects-list'), {
    animation: 150
}); */


