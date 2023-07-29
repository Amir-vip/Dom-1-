let box = document.querySelector(".box");
let inpName = document.querySelector(".name");
let inpAge = document.querySelector(".age");
let inpCourse = document.querySelector(".course");
let btnAdd = document.querySelector(".btnAdd");
let dialog = document.querySelector(".formin");
let main = document.querySelector(".main");

let data = [
  {
    id: 1,
    name: "Sorbonne",
    age: "31",
    course: "JS",
  },
  {
    id: 2,
    name: "Farinas",
    age: "29",
    course: "JS",
  },
  {
    id: 3,
    name: "Wirra",
    age: "40",
    course: "JS",
  },
];
//*ADD
btnAdd.onclick = () => {
  let newUser = {
    id: new Date().getTime(),
    name: inpName.value,
    age: inpAge.value,
    course: inpCourse.value,
  };
  data.push(newUser);
  get();
  inpName.value = "";
  inpAge.value = "";
  inpCourse.value = "";
};
//!main
main.onclick = () => {
  formin.show;
};
function get() {
  box.innerHTML = " ";
  data.forEach((element) => {
    let flex = document.createElement("div");
    flex.classList.add("flex");
    let container = document.createElement("div");
    container.classList.add("container");
    let name = document.createElement("h1");
    name.innerHTML = element.name;

    let age = document.createElement("h2");
    age.innerHTML = element.age;
    let course = document.createElement("h2");
    course.innerHTML = element.course;
    //*Delete
    function deleteUser(id) {
      data = data.filter((e) => {
        return e.id != id;
      });
      get();
    }
    // //!Edit
    // let btnEdit = document.createElement("button");
    // btnEdit.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
    // btnEdit.style.fontSize = "20px";
    // btnEdit.classList.add("Edit");

    //!delete
    let btnDelete = document.createElement("button");
    btnDelete.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    btnDelete.classList.add("btnDelete");
    btnDelete.style.fontSize = "20px";
    btnDelete.onclick = () => {
      deleteUser(element.id);
    };

    container.append(name, age, course, btnDelete);
    box.append(container);
  });
}
get();
