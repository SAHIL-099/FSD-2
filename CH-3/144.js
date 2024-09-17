// Write a node.js script to create a class time & assign members hour, minute & 
// second. Create two objects of time class & add both the time objects so that it 
// should return is third time object. Third time object should have hour, minute & 
// second such that after addition if second exceeds 60 then minute value should be 
// incremented. If minute exceeds 60 then hour value should be incremented.


class time{
    constructor(hour,min,sec){
        this.hour = hour;
        this.min = min;
        this.sec = sec;
    }
    addTime(t2){
        var t = new time(0,0,0);
        t.hour = this.hour + t2.hour;
        t.min = this.min + t2.min;
        t.sec = this.sec + t2.sec;
        if(t.sec>60){
            t.sec%=60;
            t.min++;
        }
        if(t.min > 60){
            t.min%= 60;
            t.hour++;
        }
        return t;
    }
}
var t1= new time(1,50,50);
var t2= new time(2,30,50);
var t3=t1.addTime(t2);
console.log(t3);