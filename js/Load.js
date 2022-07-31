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
}
document.getElementById("blog").onclick = function () {
    load("blog.html");
}
document.getElementById("about").onclick = function () {
    load("about.html");
}
document.getElementById("github").onclick = function () {
    
}