function cal(num1,num2) {
    num3=num2*num1;
    console.log(num3);
}

module.exports = {
    calculation:cal
}

function test(){
    if((-100 && 100 && '0') || [] === true || 0){
        console.log(1)
       
        if([] || (false && 0)){
            console.log(2)

            if(Infinity && NaN && "false"){
                console.log(3)

                if(""){
                    console.log(4)
                }
            }else{
                console.log(5)    

                if(({} || false == "") && !(null && undefined)){
                    console.log(6)
                }
            }
        }
    }
}

test()
