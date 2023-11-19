//Wheel Loader
const KB = document.getElementById('KB');
const J = document.getElementById('J');
const Vol = document.getElementById('Vol');
const Brt = document.getElementById('Brt');
const F = document.getElementById('F');
const R = document.getElementById('R');
const Z = document.getElementById('Z');
const FK = document.getElementById('FK');
const HSAB = document.getElementById('HSAB');

//jawaban
const KP = document.getElementById('KP');
const JHK = document.getElementById('JHK');
const BSAB = document.getElementById('BSAB');
const jawabanwheelloader = document.getElementById('jawabanwheelloader');
//tombol wheelloader
const hitungWheelloader = document.getElementById('hitungWheelloader');
const clearbuttWheel = document.getElementById('clearbuttWheel');
const arraysWheel = [KB, J, Vol, Brt, F, R, HSAB];

//Bulldozer
 const LKbull = document.getElementById('LKbull');
 const Pbull = document.getElementById('Pbull');
 const FKbull = document.getElementById('FKbull');
 const Jbull = document.getElementById('JBull');
 const Fbull = document.getElementById('Fbull');
 const Rbull = document.getElementById('Rbull');
 const Zbull = document.getElementById('Zbull');
 const Volbull = document.getElementById('Volbull');
 const Lbull = document.getElementById('Lbull');
 const HSABbull = document.getElementById('HSABbull');
 const JABEbull = document.getElementById('JABEbull');
 
 //tombol bulldozer 
const clearbuttBull =document.getElementById('clearbuttBull');
const hitungBull = document.getElementById('hitungBull');



 //output bulldozer
 const KPbull = document.getElementById('KPbull');
 const JHKbull = document.getElementById('JHKbull');
 const BMPbull = document.getElementById('BMPbull');
const jawabanbulldozer = document.getElementById('jawabanbulldozer');
//array bulldozer 
const arraysBull = [LKbull, Pbull,FKbull, Jbull, Fbull, Rbull, Zbull, Volbull, Lbull, HSABbull, JABEbull, KPbull, JHKbull, BMPbull];


//objekBulldozer
let B = {
    LKbull : null,
    Pbull : null,
    FKbull : null,
    Jbull : null,
    Fbull : null,
    Rbull : null,
    Zbull : null,
    Volbull : null,
    Lbull : null,
    HSABbull : null,
    JABEbull : null,
    KPbull : null,
    JHKbull : null,
    BMPbull : null
}

//hapus input wheel loader
let hapus = function (){
    for (let i = 0; i < arraysWheel.length; i++) {
        arraysWheel[i].value = "";
    }
    Z.value = 0.05;
    FK.value = 0.42;
}



//hitung wheel loader
let hitungWheelloaderCacl = function (){
 
    
    jawabanwheelloader.innerHTML = `Diketahui : <br>
    Bucket (KB) =  ${KB.value} <br>
    Jarak (J) = ${J.value} <br>
    Volume (Vol) = ${Vol.value} <br>
    Berat (Brt) = ${Brt.value} <br>
    Maju (F) = ${F.value} <br>
    Mundur (R) = ${R.value} <br>
    Z = ${Z.value} <br>
    Faktor koreksi (FK) = ${FK.value} <br>
    
    <br>
    <br>
    Hasil : <br>
    F(dalam menit) = ${F.value} x 1000/60 = ${F.value *= 1000/60}<br> 
    F(dalam menit) = ${R.value} x 1000/60 = ${R.value *= 1000/60}<br> 
    1. Kapasitas Produksi <br>
    KP =  KB x 60 x FK<br>
        -------------------<br>
        (J/F) + (J/R) x2 + Z <br>
    KP = ${KB.value} x 60 x ${FK.value} <br>
        ---------------------<br>
        '   '(${J.value}/${F.value}) + (${J.value}/${R.value}) x 2 + Z <br>
    KP = ${KB.value * 60 * FK.value} <br>
    '          ----------  '<br>
    ' ' ${(J.value/F.value) + (J.value/R.value) * 2 + Z.value}<br>
    KP = ${(KP.value = (KB.value * 60 * FK.value)/((J.value/F.value) + (J.value/R.value) * 2) + Z.value)} <br>
    
    <br>
    
    
    `;
    return KP.value;
    let temp = Vol.value / KP.value;
    JHK.value = temp/8;
    //KP = ${  (KB.value * 60 * FK.value)/((J.value/F.value) + (J.value/R.value) * 2) + Z.value} x ${J.value} = ${(KP.value = (KB.value * 60 * FK.value)/((J.value/F.value) + (J.value/R.value) * 2) * J.value+ Z.value)} <br>
}


//hapus input bulldozer
let hapusBull = function (){
    for (let i = 0; i < arraysBull.length; i++) {
        arraysBull[i].value = "";
    }
    Z.value = 0.05;
    FK.value = 0.53;
}



//hitung Bulldozer dan inisialisasikan ke dalam map setiap valuenya biar bisa di reuse
hitungBull.addEventListener("click", function (){
    let i = 0;
    for (let key in B) {
        
        B[key] = arraysBull[i].value;
        i++;
    }

    //Semua operasi Disini, hasilnya nya tinggal lempar ke fungsi yang membutuhkan untuk dijadikan string sesuai jalan & kebutuhan
    let LebarKerja = 2 * B.Pbull;
    let Fterkoreksi = B.Fbull * 1000/60;
    let Rterkoreksi = B.Rbull * 1000/60 ;
    let atasKP = (LebarKerja * B.Pbull * 60 * B.FKbull);
    let bawahKP =  B.Jbull / Fterkoreksi + B.Jbull / Rterkoreksi + B.Zbull;  
    let temp1KP =   parseFloat(atasKP)/ parseFloat(bawahKP);
    KPbull.value = temp1KP * B.Jbull;
    B.Volbull = B.Jbull * B.Lbull;
    Volbull.value = B.Volbull;
    let tempjhk = B.Volbull / (temp1KP* B.Jbull)
    B.JHKbull = tempjhk / 8;
    JHKbull.value = B.JHKbull;
    B.BMPbull = B.JHKbull * B.HSABbull;
    BMPbull.value = B.BMPbull;
    const tempJABEx8 = (KPbull.value * 8);
    const tempJABEx26 = tempJABEx8 * 26;
    const temppJABExBulan = tempJABEx26 * B.JABEbull;
    const Jabebulltotal = B.Volbull / temppJABExBulan;
    
    jawabanbulldozer.innerHTML += diketahui(); 

    jawabanbulldozer.innerHTML += KPbullCalc(LebarKerja, Fterkoreksi, Rterkoreksi, atasKP, bawahKP, temp1KP);

    jawabanbulldozer.innerHTML += jumlahHariKerja(temp1KP, tempjhk); 

    jawabanbulldozer.innerHTML += biayaMengerjakanProyek() + " juta ";

    jawabanbulldozer.innerHTML += jumlahAlatBulldozerEfective(tempJABEx8, tempJABEx26,temppJABExBulan,Jabebulltotal);

});

 function diketahui() {
    const diketahui = 
    `Diketahui: <br> 
    Lebar kerja (LK) = ${B.LKbull} <br>
    Penetrasi (P) = ${B.Pbull}<br>
    Faktor koreksi (FK) = ${B.FKbull}<br>
    Jarak (J) = ${B.Jbull}<br>
    Maju terkoreksi (F) = ${B.FKbull}<br>
    Mundur terkoreksi (R) = ${B.Rbull}<br>
    Z = ${B.Zbull}<br>
    Lebar = ${B.Lbull}<br>
    Harga sewa alat berat/perhari (HSAB) = ${B.HSABbull}<br>
    bulan penyelesaian = ${B.JABEbull} bulan`;
    


    return diketahui;
}
//mencari Kapasitas produksi bulldozer
function KPbullCalc(LebarKerja, Fterkoreksi, Rterkoreksi, atasKP, bawahKP, temp1KP) {
    
    const KP = 
    `<br><br>1. MEncari KP<br> Lebar kerja (2 x P)  = 2 x ${B.Pbull} = ${LebarKerja}<br>
    Fterkoreksi (Ft) (m/m) = F x 1000/60 => ${B.Fbull} x 1000/60 = ${Fterkoreksi}<br>
    Rterkoreksi (Rt) (m/m)= R x 1000/60 => ${B.Rbull} x 1000/60 = ${Rterkoreksi}<br> 
    KP = LK x P x 60 x FK <br>
    '   '------------------<br>
    '   ' (J/Ft)+ (J/Rt) + Z <br>
    KP = ${LebarKerja} x ${B.Pbull} x 60 x ${B.FKbull} <br>
    '      '-----------------------<br>
    '    '${B.Jbull}/${Fterkoreksi} + ${B.Jbull}/${Rterkoreksi} + ${B.Zbull} <br>
    KP = ${atasKP} <br>
    '    '------------------<br>
    '    ' ${bawahKP} <br>
    KP = ${atasKP} <br>
    KP = ${temp1KP} x ${B.Jbull} <br>
    Kp = ${temp1KP * B.Jbull}
    
    `;
    return KP;
}

function jumlahHariKerja(temp1KP, tempjhk) {
    const JHK = 
    `<br> <br> 2. Mencari Jumlah hari kerja dalam hari (mencari berapa lama pengerjaan) <br>
    Volume = jarak x lebar = ${B.Jbull} x ${B.Lbull} = ${B.Volbull} <br>
    => volume / KP = ${B.Volbull} / ${temp1KP * B.Jbull} = ${tempjhk} jam<br>
    => ${tempjhk} / 8(hok) = ${B.JHKbull} hari <br>
    `

    return JHK;
}

function biayaMengerjakanProyek() {
    const BMP = `
        <br> <br> 3. Biaya menegerjakan proyek = JHK x harga sewa alat(HSAB)
        BMP = ${B.JHKbull} x ${B.HSABbull} = ${B.BMPbull}
    `
    return BMP;
}

function jumlahAlatBulldozerEfective(tempJABEx8, tempJABEx26, temppJABExBulan, Jabebulltotal){
    const JABE = `
    <br> <br> 
    4. Jumlah alat bulldozer efective untuk penyelesaian ${JABEbull}
    dikethui : waktu penyelesaian ${B.JABEbull} bulan<br>
    => KP x 8 (hok) = ${KPbull.value} * 8 = ${tempJABEx8}<br>
    => KP x 26 (hok) = ${tempJABEx26}<br>
    => KP x bulan = ${temppJABExBulan}<br>
    => ${B.Volbull} / ${temppJABExBulan} = ${Jabebulltotal}<br>
    `
    return JABE;
}

//Wheel loader callers 
clearbuttWheel.addEventListener('click', hapus);
hitungWheelloader.addEventListener('click', hitungWheelloaderCacl); 

//Bulldozer Callers
clearbuttBull.addEventListener('click', hapusBull);









