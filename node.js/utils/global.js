
console.log(__filename);
console.log(__dirname);
console.log(process.pid);
console.log(process.platform);
console.log(process.version);
console.log(process.argv);
process.stdout.write("请输入项目名称：");
process.stdin.on("readable",()=>{
    const chunk = process.stdin.read();
    if (chunk !== null) {
        process.stdout.write(`${chunk}`);
        process.exit("1001")
    }
});
process.stdin.on('end', () => {
    process.stdout.write('结束');
});
process.on('exit', function(code) {
    // 以下代码永远不会执行
    setTimeout(function() {
        console.log("该代码不会执行");
    }, 0);
    console.log('退出码为:', code);
});
