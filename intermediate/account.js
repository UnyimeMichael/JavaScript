let balance = 0;

 function deposit (amount){
    return balance + amount;
 }

 function withdraw (amount){
    return balance - amount;

 }
 function plus(number){
   return 20 + number;
 }

 module.exports = {deposit}
