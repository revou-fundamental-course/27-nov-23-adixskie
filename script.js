// hitung luas segitiga
const alas = document.getElementById('alas')
const tinggi = document.getElementById('tinggi')
const hitung = document.getElementById('hitung')
const output = document.getElementById('output')

hitung.addEventListener('click', function(){
    let a = alas.value
    let t = tinggi.value
    let l = 0.5*a*t
    output.innerHTML = `luas segitiga dari alas ${a} cm dan tinggi ${t} cm adalah ${l} cm2`
  
})

// hitung keliling segitiga
const sisiSatu = document.getElementById('s1')
const sisiDua = document.getElementById('s2')
const sisiTiga = document.getElementById('s3')
const input = document.getElementById('input')
const hasil = document.getElementById('hasil')

input.addEventListener('click', function(){
    let s1 = sisiSatu.value
    let s2 = sisiDua.value
    let s3 = sisiTiga.value
    let k = parseInt(s1)+parseInt(s2)+parseInt(s3)
    hasil.innerHTML = `keliling segitiga dari sisi satu ${s1} + sisi dua ${s2} + sisi tiga ${s3} adalah ${k}`
    alert("scroll kembali untuk melihat hasil")
})

// reload
