

let date = document.getElementById("date");
console.log(date)
let month = document.getElementById("month");
// let year = document.getElementById("year");
let details = document.getElementById("details");
let button = document.getElementById("button");


function detailDisplay(){
    if(date.value<20 && month.value==3){
        details.innerHTML= "Sign : Pisces | Traits : Sensitivity | Ruler : Neptune"
    }else if(date.value>=20 && month.value==3){
        details.innerHTML= "Sign : Aries | Traits : Energy,Initiative | Ruler : Mars"
    }else if(date.value<=18 && month.value==4){
        details.innerHTML= "Sign : Aries | Traits : Energy,Initiative | Ruler : Mars"
    }else if(date.value<=30 && month.value==4){
        details.innerHTML= "Sign : Taraus | Traits : Reliability | Ruler : venus"
    }else if(date.value<=20 && month.value==5){
        details.innerHTML= "Sign : Taraus | Traits : Reliability | Ruler : venus"
    }else if(date.value>20 && month.value==5){
        details.innerHTML= "Sign : Gemini | Traits : Versatility | Ruler : Mercury"
    }else if(date.value<=20 && month.value==6){
        details.innerHTML= "Sign : Gemini | Traits : Versatility | Ruler : Mercury"
    }else if(date.value<=30 && month.value==6){
        details.innerHTML= "Sign : cancer | Traits : intuition | Ruler : Moon"
    }else if(date.value<=22 && month.value==7){
        details.innerHTML= "Sign : cancer | Traits : intuition | Ruler : Moon"
    }else if(date.value>22 && month.value==7){
        details.innerHTML= "Sign : Leo | Traits : Confidence | Ruler : Sun"
    }else if(date.value<=22 && month.value==8){
        details.innerHTML= "Sign : Leo | Traits : Confidence | Ruler : Sun"
    }else if(date.value>22 && month.value==8){
        details.innerHTML= "Sign : virgo | Traits : Perfectionism | Ruler : Mercury"
    }else if(date.value<=22 && month.value==9){
        details.innerHTML= "Sign : virgo | Traits : Perfectionism | Ruler : Mercury"
    }else if(date.value<=30 && month.value==9){
        details.innerHTML= "Sign : Libra | Traits : Balance | Ruler : Venus"
    }else if(date.value<=22 && month.value==10){
        details.innerHTML= "Sign : Libra | Traits : Balance | Ruler : Venus"
    }else if(date.value>22 && month.value==10){
        details.innerHTML= "Sign : Scorpio | Traits : Passion | Ruler : Pluto"
    }else if(date.value<=21 && month.value==11){
        details.innerHTML= "Sign : Scorpio | Traits : Passion | Ruler : Pluto"
    }else if(date.value<=30 && month.value==11){
        details.innerHTML= "Sign : Sagittarius | Traits : Independence | Ruler : Jupiter"
    }else if(date.value<=21 && month.value==12){
        details.innerHTML= "Sign : Sagittarius | Traits : Independence | Ruler : Jupiter"
    }else if(date.value>21 && month.value==12){
        details.innerHTML= "Sign : Capricorn | Traits : Ambition | Ruler : Saturn"
    }else if(date.value<=19 && month.value==1){
        details.innerHTML= "Sign : Capricorn | Traits : Ambition | Ruler : Saturn"
    }else if(date.value>19 && month.value==1){
        details.innerHTML= "Sign : Aquarius | Traits : Vision | Ruler : Uranus"
    }else if(date.value<=18 && month.value==2){
        details.innerHTML= "Sign : Aquarius | Traits : Vision | Ruler : Uranus"
    }else if(date.value<=28 && month.value==2){
        details.innerHTML= "Sign : Pisces | Traits : Sensitivity | Ruler : Neptune"
    }else if(date.value>28 && month.value==2){
        details.innerHTML= "Enter valid date"
    }else if(date.value>30 && month.value==4){
        details.innerHTML= "Enter valid date"
    }else if(date.value>30 && month.value==6){
        details.innerHTML= "Enter valid date"
    }else if(date.value>30 && month.value==9){
        details.innerHTML= "Enter valid date"
    }else if(date.value>30 && month.value==11){
        details.innerHTML= "Enter valid date"
    }else if(date.value==0 && month.value==0){
        details.innerHTML= "Enter valid date and month"
    }else if(month.value==0){
        details.innerHTML= "Enter valid month"
    }
}



button.addEventListener("click",detailDisplay);

