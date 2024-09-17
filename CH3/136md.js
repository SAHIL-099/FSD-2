exports.reversedNumber = (num) =>{
    return parseInt(num.toString().split('').reverse().join(''));
}

exports.calcAverage = (arr) =>{
    if(arr.length == 0){
        return 0;
    }else{
        sum = 0;
        for(i of arr){
            sum = sum + i;
        }
        return (sum/arr.length);
    }
}