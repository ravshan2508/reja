console.log('Jack Ma advices');
const list = [
    'be a good student', // 0-20
    'find a right boss and make many mistakes', //20-30
    'work for yourself', //30-40
    'do what you are good at', //40-50
    'invest in youth', //50-60
    'enjoy retirement', // 60
];

async function adviceMe(a) {
    if (typeof a !== 'number') throw new Error ('insert number');
    else if (a<=20) return list[0];
    else if (a>20 && a<=30) return list[1];
    else if (a>30 && a<=40) return list[2];
    else if (a>40 && a<=50) return list[3];
    else if (a>50 && a<=60) return list[4];
    else {  
        return list[5];
        
    }
}

// then -- catch

console.log("0");
adviceMe(65)
    .then((data) => {
    console.log('My advice is:',data);
    })
    .catch((err) => {
        console.log('Error:',err);
    })

console.log("1");
