var fs=require('fs');
var file="icecream.txt";

function taste(){
    fs.exists(file, function(exists){
        if(exists)
        {
            fs.stat(file,function(err,stat){
                if(stat.isFile()){
                    fs.readFile(file, function(err,data){
                        console.log(data.toString())
                    })
                }
            })
        }
    })
}
taste();