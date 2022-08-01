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
    parent.style.visibility = "hidden";
}
function blog_post(username, postdate, title, tags, id) {
    var parent = document.getElementById('posts-list');

    parent.style.visibility = "visible";

    //Create Post Root by id 
    var div = document.createElement('div');
    div.id = id;
    div.className = "post";
    div.onclick = function(){
        alert(this.id);
    };

    parent.appendChild(div);
    parent = div;

    var user = document.createElement('p');
    user.textContent = username;
    user.className = 'posts-meta'

    var date = document.createElement('p');
    date.textContent = postdate;
    date.className = 'posts-meta'

    var elem = document.createElement('h2');
    elem.textContent = title;

    var tag = document.createElement('p');
    tag.textContent = tags;

    // 要素を追加
    parent.appendChild(user);
    parent.appendChild(date);
    parent.appendChild(elem);
    parent.appendChild(tag);
}
function blog_main() {
    blog_post("@Pikka", "2021年7月31日", "React使ってみた", "React",1);
    blog_post("@Pikka", "2021年7月32日", "Vue使ってみた", "Vue",2);
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