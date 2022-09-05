console.log('Jack Ma advices');
const list = [
    'be a good student', // 0-20
    'find a right boss and make many mistakes', //20-30
    'work for yourself', //30-40
    'do what you are good at', //40-50
    'invest in youth', //50-60
    'enjoy retirement', // 60
];

function adviceMe(a,callback) {
    if (typeof a !== 'number') callback('insert number', null);
    else if (a<=20) callback(null,list[0]);
    else if (a>20 && a<=30) callback(null,list[1]);
    else if (a>30 && a<=40) callback(null,list[2]);
    else if (a>40 && a<=50) callback(null,list[3]);
    else if (a>50 && a<=60) callback(null,list[4]);
    else {
        setTimeout(function () {
            callback(null,list[5]);
        },5000);
        
    }
}
console.log("0");
adviceMe(65, (err, data) => {
        if (err) console.log('ERROR:',err);
        else {
        console.log(`My advice is:`, data);
        };

    } );
console.log("1");

    
