import inquirer from "inquirer";
let myBalance = 10000;// dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
 message:"Enter your Pin",
 type:"number"
        }
    ]
);
if(pinAnswer.pin === myPin){
    console.log("Correct pin code !!!");
   
    let operationAns = await inquirer.prompt(
        [
            {

            name:"operation",
            message:"Please select option",
            type:"list",
            choices:["Withdraw", "check balance"]

        }
    ]
    );
if(operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt(
        [
            {
                name:"amount",
                message:"Enter your amount",
                type:"number"
            }
        ]
    );
    myBalance -= amountAns.amount;
    console.log(`your remaining balance is ${myBalance}`)

    
}else if (operationAns.operation === "check balance"){
    console.log(`Your remaining balance is ${myBalance}`);
    
}
}
else{
    console.log("incorrect pin code")
}