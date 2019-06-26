//Get User Choice

const getUserChoice=(userInput)=>{
    
    /*Since a user can pass in a parameter, such as ‘Rock’ or ‘rock’
     with different capitalizations,
     begin by utilizing JavaScript’s toLowerCase() function 
     to make the userInput all lowercase.*/ 
    
     userInput=userInput.toLowerCase();

    if(userInput==='rock'||userInput==='paper'||userInput==='scissors'){
          return userInput
      }
        else{
      console.log('Error!');
    }
  }
  
  //Get Computer Choice
  
  const getComputerChoice=() =>{
       const randomNumber=Math.floor(Math.random()*3);

    switch(randomNumber)
    {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
        
      case 2:
        return 'scissors'
       
        }
  }
  
  //To Determine a Winner
  
  const determineWinner=(userChoice,computerChoice)=>{
      
    if(userChoice===computerChoice){
      return 'Game tie';
    }
    
    if(userChoice==='rock'){
      if(computerChoice==='paper'){
        return 'Computer Won!';
      }
      else return 'You won!';
    }
       if(userChoice==='scissors'){
      if(computerChoice==='rock'){
        return 'Computer Won!';
      }
      else return 'You won!';
    }
       if(userChoice==='paper'){
      if(computerChoice==='rock'){
        return 'Computer Won!';
      }
      else return 'You won!';
    }
  }

  //Start the game
  
  const playgame=()=>{
    
    const userChoice=getUserChoice('scissors')  //Write your input here in paranthesis
    const computerChoice=getComputerChoice()
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice,computerChoice))
  }
  playgame()