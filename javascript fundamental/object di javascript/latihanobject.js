// object nama supir dan jurusan angkotnya
function Angkot(sopir,trayek,penumpang,kas){
    this.sopir=sopir;
    this.trayek=trayek;
    this.penumpang=penumpang;
    this.kas=kas;
// fungsi penumpang naik
    this.penumpangNaik=function(namaPenumpang){
        this.penumpang.push(namaPenumpang)
        return this.penumpang
    }

    // fungsi penumpang turun 
    this.penumpangTurun=function(namaPenumpang,bayar){
        // apabila angkot masih kosong
        if(this.penumpang.length===0){
            alert("belum ada penumpang");
            return false
        }
        // lopping untuk kursi duduk angkot
        for(var i =0;i<penumpang.length;i++){
            // apabila kursi penumpang kosong di isi oleh nama penumpang baru
            if(this.penumpang[i]==namaPenumpang){
              // apabila penumpang turun kursi diisi undifined
                this.penumpang[i]=undefined;
                this.kas+=bayar;
                return this.penumpang
            }
        }
    }
}

var angkot1=new Angkot('sandhika galih','[cicurug,sukabumi]',[],0);
var angkot2=new Angkot('rizki gunawan','[cicurug,sukabumi]',[],0);
var angkot3=new Angkot('ucok baba','[cicurug,sukabumi]',[],0);
