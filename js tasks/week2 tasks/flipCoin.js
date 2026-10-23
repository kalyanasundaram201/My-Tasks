function flipcoin(){
  var random = Math.floor(Math.random()*2);
  if(random){
     console.log("HEADS");
  }else{
      console.log("TAILS")
  }
  
}

flipcoin();