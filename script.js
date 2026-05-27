function openTab(evt, tabName) {
    let contents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < contents.length; i++) contents[i].style.display = "none";
    
    let links = document.getElementsByClassName("nav-link");
    for (let i = 0; i < links.length; i++) links[i].classList.remove("active");

    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.classList.add("active");
}
