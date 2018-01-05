/**
 * This program demonstrates encapsulate the variables in program
 * Created by linajiema on 2018/1/3.
 */
(() => {
   var myObj = (() => {
       var name_ = 'Emma';
       return {
           getName() {
               return name_;
           }
       }
   })();
   console.log(myObj.getName());
   console.log(myObj.name_);
})()