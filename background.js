var intBlinkInterval, timer;
//default value!
intBlinkInterval = 20;

var intOldNotifID, intNewNotifID;
intOldNotifID = 0;



//check if the interval is saved in the storage
if (parseInt(localStorage.BlinkInterval,10) > 0){
    console.log("intblink: " + intBlinkInterval + " storage: " + localStorage.BlinkInterval);
    //check if the stored Blink Interval is different from default
    if (localStorage.BlinkInterval !== intBlinkInterval){
        intBlinkInterval = localStorage.BlinkInterval;
        
    }else{
        //console.log(intBlinkInterval + " not equal!");
    }
}else{
    console.log("No Interval in the Storage!");
    localStorage.BlinkInterval = intBlinkInterval;
    //Do Nothing!
}


//The main blink notifier
function Notifier() {
    var opt = {
        type: 'basic',
        title: 'Eye Rest!',
        message: 'You\'ve been staring at the screen for ' + intBlinkInterval + ' minutes straight.\n It\'s time to get your eyes off the screen!',
        priority: 1,
    };
}



timer = setInterval(Notifier, intBlinkInterval * 60 * 1000);


setInterval(function(){
    // console.log('Interval Loaded; storage:' + localStorage.BlinkInterval + '; intblink: '+ intBlinkInterval);
    if (intBlinkInterval !== localStorage.BlinkInterval){
        intBlinkInterval = localStorage.BlinkInterval;
        clearInterval(timer);
        timer = setInterval(Notifier, intBlinkInterval * 60 * 1000);
    }
},1000)
