const nameForm = document.querySelector("#name-form")
const welcomeContainer = document.querySelector("#welcome")
const logoutBtn = document.querySelector("#logout")
let entry = document.querySelector("#entry")


function checkUser () {
    
    const userName = localStorage.getItem("name")

    if (userName) {
        
        nameForm.style.display = "none";
        welcomeContainer.style.display = "block"
        
        const userNameElement = document.querySelector("#userName")
        
        userNameElement.textContent = userName;
    } else {
        
        nameForm.style.display = "block";
        welcomeContainer.style.display = "none";
    }
}

nameForm.addEventListener("submit", (e) => {
    e.preventDefault();

    entry.style.display = "none"; 
    const nameInput = document.querySelector("#name")

    localStorage.setItem("name", nameInput.value)

    nameInput.value =" ";
    
    checkUser();
});

logoutBtn.addEventListener("click", () => {
    entry.style.display = "block";
    localStorage.removeItem("name");
    
    checkUser();
    
});

//Aplication Start
checkUser();
