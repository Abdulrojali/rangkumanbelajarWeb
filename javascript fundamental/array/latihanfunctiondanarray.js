var penumpang = []
var tambahPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        penumpang.push(namaPenumpang)
        return penumpang;
    }
    else {
        for (let i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == undefined) {
                penumpang[i] == namaPenumpang
                return penumpang;
            }
            else if (penumpang[i] == namaPenumpang) {
                console.log("nama penumpang sudah ada :" + namaPenumpang)
                return penumpang
            }
            else if (i == penumpang.length - 1) {
                penumpang.push(namaPenumpang)
                return penumpang;
            }

        }

    }
    return penumpang;
}

var hapusPenumpang = function (namaPenumpang, penumpang) {
        if (penumpang.length == 0) {
            console.log("penumpang masih kosong")
        }
        else{
            for (let h = 0; h < penumpang.length; h++) {
                if(penumpang[h]==namaPenumpang){
                    penumpang[h]==undefined;
                    return penumpang
                }
                else if(h==penumpang.length-1){
                    console.log(namaPenumpang[h]+"\t tidak ada di dalam angkot")
                    return penumpang
                }
            }
        }
}

/*var name = document.getElementById("nama")
var penampungan=[]
var isiPenampung=function(name,penampungan){
    if(penampungan.length==0){
        penampungan.push(name)
        return penampungan;
    }
    else{
        for(let j =0; j<penampungan.length;j++){

        }        
    }
}
/*function clickme(){
    console.log("click")
}
/*document.getElementById("click").addEventListener('click',()=>{
   console.log(penampungan.value)
})*/