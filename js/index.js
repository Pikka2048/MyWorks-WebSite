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
function blog_post() {
    var elem = document.createElement('h2');
    elem.textContent = "🔍 React使ってみた!";

    var tag = document.createElement('p');
    tag.textContent = "🏷 React, Javascript, Devops";

    var parent = document.getElementById('posts-list');

    // 要素を追加
    parent.appendChild(elem);
    parent.appendChild(tag);
}
function blog_main() {
    blog_post();
}
document.getElementById("home").onclick = function () {
    load("home.html");
    history.pushState(null, null, "home");
}
document.getElementById("blog").onclick = function () {
    load("blog.html");
    blog_main();
    history.pushState(null, null, "blog");
}
document.getElementById("about").onclick = function () {
    load("about.html");
    history.pushState(null, null, "about");
}

window.onload = function () {
    load("home.html");
}