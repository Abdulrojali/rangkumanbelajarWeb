const select=document.getElementById('kota')
const btn=document.querySelector('#click')
const tampil=document.querySelector('.tampilketerangan')


btn.addEventListener('click',function(){
    let option=select.value
    let div
    if(option=='jakarta'){
         div=`<div class='coba'>
       <h2> nama kota: jakarta </h2>
        <p>keterangan : jakarta adalah kota di daerah jawa barat yang berdekatan dengan bogor dan bekasi</p>
        <img class='gambarjakarta' src='https://jakarta-tourism.sgp1.cdn.digitaloceanspaces.com/home/welcome/TTlFgtlC4VUjSOzBzEnHwwLeOCh1bE-metaUXNSNGpmZE5yTTlsQTU0ZHpTY2lPcmh6OXV0bmMyOFBIQVRKYzR5VS5qcGc=-.jpg'>
        </div> `
        tampil.innerHTML=div
    }
    else if(option=='bogor'){
        div=`<div class='coba'>
        <h2> nama kota: bogor </h2>
         <p>keterangan : bogor adalah kota di daerah jawa barat yang berdekatan dengan jakarta dan bekasi</p>
         <img src='https://koran-jakarta.com/images/article/perjalanan-kota-bogor-dulu-hingga-kini-menjadi-penyanggah-ibu-kota-negara-220327193334.jpg'>
         </div> `
         tampil.innerHTML=div
    }
    else if(option=='depok'){
        div=`<div class='coba'>
        <h2> nama kota: depok </h2>
         <p>keterangan : depok adalah kota di daerah jawa barat yang berdekatan dengan jakarta dan bekasi</p>
         <img src='https://cloud.jpnn.com/photo/arsip/normal/2021/11/11/jalan-pemuda-yang-akan-dijadikan-kawasan-heritage-depok-foto-0lzs.jpg'>
         </div> `
         tampil.innerHTML=div
    }
    else if(option=='tanggerang'){
        div=`<div class='coba'>
        <h2> nama kota: tanggerang </h2>
         <p>keterangan : tanggerang adalah kota di daerah jawa barat yang berdekatan dengan jakarta dan bekasi</p>
         <img src='https://cdn-cms.pgimgs.com/areainsider/2020/01/tangerang-kawasan-nyaman.jpg'>
         </div> `
         tampil.innerHTML=div
    }
    else if(option=='bekasi'){
        div=`<div class='coba'>
        <h2> nama kota: bekasi </h2>
         <p>keterangan : bekasi adalah kota di daerah jawa barat yang berdekatan dengan jakarta dan bekasi</p>
         <img src='https://www.goodnewsfromindonesia.id/uploads/post/large-kehadiran-kota-bekasi-pernah-menjadi-wilayah-bagi-kerajaan-tempo-dulu1623314426.png'>
         </div> `
         tampil.innerHTML=div
    }
})


