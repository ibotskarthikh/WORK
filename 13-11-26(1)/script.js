const form = document.getElementById("contactForm");
const userTable = document.getElementById("userTable");

function displayUsers() {
  let users = JSON.parse(localStorage.getItem("userDetails")) || [];

  userTable.innerHTML = "";

  users.forEach((user) => {
    userTable.innerHTML += `
            <tr>
                <td>${user.fname} ${user.lname}</td>
                <td>${user.email}</td>
                <td>${user.mobile}</td>
                <td>${user.gender}</td>
                <td>${user.education}</td>
            </tr>
        `;
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let users = JSON.parse(localStorage.getItem("userDetails")) || [];

  let user = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    email: document.getElementById("mail").value,
    mobile: document.getElementById("mobilenumber").value,
    gender: document.querySelector('input[name="gender"]:checked').value,
    education: document.querySelector('input[name="education"]:checked').value,
  };

  users.push(user);

  localStorage.setItem("userDetails", JSON.stringify(users));

  form.reset();

  displayUsers();
});

displayUsers();
