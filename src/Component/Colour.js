export default function Colour() {
    function changeColor(e){
        function random(number) {
            return Math.floor(Math.random() * (number + 1));
          }
        const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
           e.target.style.backgroundColor=rndCol;
    }

    return(<button onClick={(e)=>changeColor(e)} >Click to change colour</button>)
}