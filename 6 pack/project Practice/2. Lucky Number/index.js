const zodiac = document.getElementById("zodiac")

const body = document.body;
const changeBG=() => {
    switch (zodiac.value) {
        case "Aries":
            body.style.backgroundColor = "#34ebb4";
            break;
        case "Taurus":
            body.style.backgroundColor = "#34e8eb";
            break;
        case "Gemini":
            body.style.backgroundColor = "#378ffa";
            break;
        case "Cancer":
            body.style.backgroundColor = "#906de3";
            break;
        case "Leo":
            body.style.backgroundColor = "#e63ee0";
            break;
        case "Virgo":
            body.style.backgroundColor = "#eb2859";
            break;
        case "Libra":
            body.style.backgroundColor = "#35cc2d";
            break;
        case "Scorpio":
            body.style.backgroundColor = "#518bc2";
            break;
        case "Sagittarius":
            body.style.backgroundColor = "#ed8932";
            break;
        case "Capricorn":
            body.style.backgroundColor = "#e39f0b";
            break;
        case "Aquarius":
            body.style.backgroundColor = "#0bd1e3";
            break;
        case "Pisces":
            body.style.backgroundColor = "#d44d04";
            break;
        
        default:
            body.style.backgroundColor = "#ffffff"
            break;
    }
}