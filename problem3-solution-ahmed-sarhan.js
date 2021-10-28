let myItems = document.querySelector(".items");
const add = (event) => {
  let myInput = event.target.value;

  myItems.innerHTML += `
  <tr>
  <td>${myInput.slice(0, -1)}</td>
  <td>${myInput.slice(-1)}</td>
  <td><button onclick="remove(this.parentNode)">X</button></td>
</tr>
    `;
};

const remove = (event) => {
  event.parentNode.style.display = "none";
};
