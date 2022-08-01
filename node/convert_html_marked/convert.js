const program = require("commander");
const fs = require("fs");
// markedモジュールをmarkedオブジェクトとしてインポートする
const marked = require("marked");

function conver_markdown(file_name) {
    program.parse(process.argv);
    const filePath = file_name;

    fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
        if (err) {
            console.error(err.message);
            process.exit(1);
            return;
        }
        // MarkdownファイルをHTML文字列に変換する
        const html = marked.parse(file);
        console.log(html);
        const filename = filePath.slice(0, filePath.length - 3);
        fs.writeFile("../../pages/" + filename + ".html", html, function (err, result) {
            if (err) console.log('error', err);
        });
    });
}

fs.readdir('.', function (err, files) {
    if (err) throw err;
    var fileList = files.filter(function (file) {
        return fs.statSync(file).isFile() && /.*\.md$/.test(file); //絞り込み
    })
    for (let i = 0; i < fileList.length; i++) {
        conver_markdown(fileList[i])
    }
});
