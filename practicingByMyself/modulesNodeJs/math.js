exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;



function add(num1,num2){
    return num1+num2;
    };
    
    function substract(num1,num2){
        return num1-num2;
     };
    
    function multiply(num1,num2){
        return num1*num2;
    }; 
    
    function divide(num1,num2){
        if(num2 == 0){
            console.log('no se puede dividir / 0')
        }else{
            return num1/num2;
        }
    }