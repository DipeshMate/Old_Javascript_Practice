const input = document.getElementById("inputID");
const checkBtn = document.getElementById("check");
const clearBtn = document.getElementById("delete");

//helps in full serve i.e to get the data from backend like add to cart data

//session storage : every browser Tabs has its own session storage,upto 5MB we can store
// checkBtn.addEventListener("click", () => {
//     sessionStorage.setItem("key1",input.value);
// })

// if (sessionStorage.getItem("key1")) {
//     alert(sessionStorage.getItem("key1"));
// }

// clearBtn.addEventListener("click", () => {
//     sessionStorage.removeItem("key1"); // and clear() for all keys
// })

//Local storage :- key will remain in local storage after closing of browser session also until it get or clear the data,upto 5-10 MB we can store
checkBtn.addEventListener("click", () => {
    localStorage.setItem("key1",JSON.stringify({name:"Dipesh",surname:"Mate"}));
})

if (localStorage.getItem("key1")) {
    console.log(JSON.parse(localStorage.getItem("key1")));
}

clearBtn.addEventListener("click", () => {
    localStorage.removeItem("key1"); // and clear() for all keys
})
