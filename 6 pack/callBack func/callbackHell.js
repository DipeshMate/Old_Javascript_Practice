const gameList = []
const game = {} 

const fetchdata= (callBack)=> {
    //it is like a API,as we dont know how much time an API can take
    //here, setTimeout works Asynchronous 
    setTimeout((callBack) => {
        gameList.push(
           {
                name: "game1",
                id: "3782x732bbb"
            },
           {
                name: "game2",
                id: "7GBCCc732bbb"
            },
           {
                name: "game3",
                id: "CCasd3332bbb"
            },
           
        );
        console.log("console log after fetching");
        callBack();//don't forget to pass callback as a parameter in setTimeout function to get use of callback
    },3500,callBack)
}




const displayGame = () => {
    setTimeout(() => {
        for (let i = 0; i < gameList.length; i++) {
            const p = document.createElement("p");
            p.innerHTML = gameList[i].name; //because every element is object in js
            document.body.append(p);
        }
        //console.log(gameList); empty array
        console.log("console log after displaying");
    },1500)
}
fetchdata(displayGame);
//displayGame(); //here we use displayGame function as a callBack function