function load(filedir) {
    exit_blog_page();
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

//ブログから他ページに推移するときに呼び出すこと
function exit_blog_page() {
    var parent = document.getElementById('posts-list');
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function blog_post() {
    var parent = document.getElementById('posts-list');
    exit_blog_page();

    var user = document.createElement('p');
    user.textContent = "@Pikka";
    user.className = 'posts-meta'

    var date = document.createElement('p');
    date.textContent = "2022年7月31日";
    date.className = 'posts-meta'

    var elem = document.createElement('h2');
    elem.textContent = "🔍 React使ってみた!";

    var tag = document.createElement('p');
    tag.textContent = "🏷 React, Javascript, Devops";

    // 要素を追加
    parent.appendChild(user);
    parent.appendChild(date);
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