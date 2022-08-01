
function load(filename) {
    QuitBlogPage()

    var url = root_path + "/pages/" + filename;
    console.log(url)
    console.log(root_path)

    var xhr = new XMLHttpRequest(),
        method = "GET",
        url;
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
function QuitBlogPage() {
    var parent = document.getElementById('posts-list');
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    parent.style.visibility = "hidden";
}
function CreateBlogPostElements(user, date, title, tags, id) {
    var parent = document.getElementById('posts-list');

    parent.style.visibility = "visible";

    //Create Post Root by id 
    var div = document.createElement('div');
    div.id = id;
    div.className = "post";
    div.onclick = function () {
        QuitBlogPage();
        page_id = this.id;
        load("post" + page_id + ".html");
        is_run_github ? path = "/7492WebSite" : path = "";
        history.pushState(null, null, path + "/blog/" + page_id);
    };

    parent.appendChild(div);
    parent = div;

    var post_user = document.createElement('p');
    post_user.textContent = user;
    post_user.className = 'posts-meta'

    var post_date = document.createElement('p');
    post_date.textContent = date;
    post_date.className = 'posts-meta'

    var post_title = document.createElement('h2');
    post_title.textContent = title;

    var post_tag = document.createElement('p');
    post_tag.textContent = tags;

    // 要素を追加
    parent.appendChild(post_user);
    parent.appendChild(post_date);
    parent.appendChild(post_title);
    parent.appendChild(post_tag);
}
function GoBlogPage() {
    CreateBlogPostElements("@Pikka", "2021年7月31日", "React使ってみた", "React", 1);
    CreateBlogPostElements("@Pikka", "2021年7月32日", "Vue使ってみた", "Vue", 2);
}
document.getElementById("home").onclick = function () {
    load("home.html", true);
    is_run_github ? path = "/7492WebSite" : path = "";
    history.pushState(null, null, path + "/home");
}
document.getElementById("blog").onclick = function () {
    load("blog.html", true);
    GoBlogPage();
    is_run_github ? path = "/7492WebSite" : path = "";
    history.pushState(null, null, path + "/blog");
}

document.getElementById("about").onclick = function () {
    load("about.html", true);
    is_run_github ? path = "/7492WebSite" : path = "";
    history.pushState(null, null, path + "/about");
}


window.onload = function () {
    /** 更新される直後の処理 */
    window.addEventListener('unload', function (e) {
        console.log("reload");
        history.pushState(null, null, path + "/home");
    });

    if (location.hostname.match("github.io")) {
        console.log("run in github io");
        is_run_github = true;
        root_path = "https://" + location.hostname + "/" + "7492WebSite";
    }
    else {
        root_path = "http://" + location.hostname + ":" + location.port;
        is_run_github = false;
    }
    load("home.html");
}