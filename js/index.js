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
    // 要素を作成
    var elem = document.createElement('div');
    
    elem.textContent = "React使ってみた！";

    // 親要素を取得
    var parent = document.getElementById('posts-list');
    console.log(parent);

    // 要素を追加
    parent.appendChild(elem);
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