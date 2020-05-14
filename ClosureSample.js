function show(){
    var j='j a local variable of outer function';
    console.log(j);
    function innerFun(){
        var k='k a loval variable of inner functon';
        console.log(k);
        console.log(j);
    }
    innerFun()
}
show();