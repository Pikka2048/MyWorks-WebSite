function load(filedir) {
    var xhr = new XMLHttpRequest(),
        method = "GET",
        url = "pages/" + filedir;
    var content = document.getElementById("content");

    xhr.open(method, url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var restxt = xhr.responseText;
            content.innerHTML = restxt;
        }
    };
    xhr.send();
}
document.getElementById("home").onclick = function () {
    load("home.html");
    history.pushState(null, null, "home");
}
document.getElementById("blog").onclick = function () {
    load("blog.html");
    history.pushState(null, null, "blog");
}
document.getElementById("about").onclick = function () {
    load("about.html");
    history.pushState(null, null, "about");
}
document.getElementById("github").onclick = function () {
    
}
window.onload = function(){
    load("home.html");
}