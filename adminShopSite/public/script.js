const container = document.querySelector(".container");
const table = document.querySelector("table")

function tableCreater(res) {

    for (let elem of res) {
        let row = document.createElement('tr')
        for (let obj in elem) {

            let col = document.createElement('td');
            if (obj === 'img') {
                let img = document.createElement('img');
                img.src = elem[obj];
                img.classList.add("productImg");
                col.appendChild(img);
            } else {
                col.innerHTML = elem[obj];

            }
            row.appendChild(col);


        };
       
        let td2 = document.createElement('td');
        td2.innerHTML = `<button onClick="clickDeleteFunc(${elem.id})">Delete</button>`;

        row.appendChild(td2);
        table.appendChild(row);
    }

}

function clickDeleteFunc(id) {
    fetch(`/events/${id}`, {
            method: "DELETE"
        }).then(resp => console.log("Its Ok"))
        .catch(err => console.log(err))
    location.reload()
}



fetch("/selectAll").then((response) => response.json()).then(res => tableCreater(res))