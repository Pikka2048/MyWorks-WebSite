function load(filedir) {
    var xhr = new XMLHttpRequest(),
        method = "GET",
        url = filedir;
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
document.getElementById("about").onclick = function(){
    load("about.html");
}