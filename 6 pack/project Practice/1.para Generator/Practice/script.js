const input = document.getElementById("numOfWords");
const paragraph = document.querySelector(".Paragraph");


const paracreate = (n) => {
    let text = "";
    const Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < n; i++){
        const random = (Math.random() * (n)).toFixed(0);
        text += Letters[random];
    }
    return text;
}


const paraGenerate = () => {
    const noOfWords = Number(input.value);
    const newPara = document.createElement("p");

    let data = "";
    for (let i = 0; i < noOfWords; ++i){
        const randomNumber = (Math.random() * (15)).toFixed(0);
        data += paracreate(randomNumber).toLowerCase();
        data += " ";
    }

    newPara.setAttribute("class", "paras");
    newPara.innerHTML = data;
    paragraph.append(newPara);
}