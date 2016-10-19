
function Car(name,model,type){
  var numOfDoors;
  if(typeof name ==="undefined"){
    this.name="General";
    this.model="GM";
  }
  else{
    this.name=name;
    this.model=model;
    this.type=type;
    if(this.name==="Porshe"||this.name==="Koenigsegg"){ this.numOfDoors=2;}
    else{this.numOfDoors=4;}
    
    if(this.type==="trailer"){this.numOfWheels=8;}
    else{this.numOfWheels=4;
      
    }
      
    
  }
}
Car.prototype.drive = function(spe){
  if(typeof spe=="undefined"){
    this.speed='0 km/h';
  }
  if(this.type==="trailer"){
    this.speed=spe*11+ ' km/h';
  }
  else{
  this.speed= spe*50+' km/h';
  }
};


