let password=prompt("Enter password:")
const balance=1000;

if(password=="12345")
{
    let number=prompt("Welcome to ATM! What operation u want to perform: 1.deposit 2.withdraw 3.checkbalance 4.exit,choose one: ")
    switch(number){
        case "1":
            let deposit=(prompt("Enter amount u want to deposit:"))
            num = balance + deposit;
            alert("New Balance is: "+num)
            break;
            
            case "2":
                let withdraw=prompt("Your current balance is 1000. Enter amount u want to withdraw:")
                num1 = balance - withdraw;
                alert("Current balance after withdrawal is :" +num1)
                break;
                
                case "3":
                    alert("Your current balance is "+balance)
                    break;
                    
                    case "4":
                    
                        break;
                        
                        default:
                        alert("invalid");
                        break;
            
            
    }
}
else{
    alert("Wrong password!")
}