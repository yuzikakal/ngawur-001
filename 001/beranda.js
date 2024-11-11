let left = document.querySelectorAll(".kiri button")
let right = document.querySelectorAll(".kanan div")

// console.log(left, right)

left.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        right.forEach(content => {
            content.classList.remove("x")
        })
        left.forEach((tab) => {
            tab.classList.remove("x")
        })
        right[index].classList.add("x")
        left[index].classList.add("x")
    })
})

function alerto() {
    alert("Yaha gabisa custom profile awokawoakwok")
}

// const menuList = document.getElementById("icon")
// const isiList = document.getElementById("isi")

// menuList.addEventListener("click", () => {
//     isiList.classList.toggle("hide")
// })



function panah() {
    var cape = document.getElementById("listo")

    if (cape.style.display === 'none') {
        cape.style.display = 'flex'
    }
    else {
        cape.style.display = 'none'
    }
}

// const panah = document.getElementById("panah")
// const listo = document.getElementById("listo")

// panah.addEventListener("click", () => {
//     listo.classList.toggle("kiri")
// })