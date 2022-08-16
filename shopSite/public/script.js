let productsDiv = document.querySelector(".products")

function createProduct(img, name, model, price) {
    let product = document.createElement("div")
    product.classList.add('productDiv')
    product.innerHTML = `
    <img src="${img}" class="productImg" >
    <h3>${name}</h3>
    <h5>${model}</h5>
    <h4>${price}</h4>
    `
    productsDiv.appendChild(product)
}
fetch("/selectAll").then(res => res.json()).then((res) => {
    for (let elem of res) {
        createProduct(elem.img, elem.name, elem.model, elem.price)
    }
})
    .catch(err => console.log(err))


function filterName(type, request) {
    document.querySelector(type).addEventListener("click", () => {
        productsDiv.innerHTML = ""
        fetch(request).then(res => res.json()).then(res => {
            for (let elem of res) {
                createProduct(elem.img, elem.name, elem.model, elem.price)
            }
        }).catch(err => console.log(err))
    })

}
filterName(".iphone", "/selectIphone")
filterName(".asus", "/selectAsus")
filterName(".hp","/selectHp")