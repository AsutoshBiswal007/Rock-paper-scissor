let computerChoice;
function generateComputerChoice(){
    let randomNumber = Math.random()* 3;
    if(randomNumber>0 && randomNumber<=1){
         computerChoice='Rock';
        //console.log('Computer Choice is Stone')
    }
    else if (randomNumber>1 && randomNumber<=2){
        computerChoice = 'Paper';
        //console.log('Computer Choice is Paper')
    }
    
    else{
         computerChoice = 'Scissor';
        //console.log('Computer Choice is Scissor')
    }
}