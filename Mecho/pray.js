function Pray(name){
    this.name=name;
    this.massOfPray=[];
    this.min=30;
    this.max=80;

    this.nutrition=function(){
        for (var index = 1; index <= 30; index++) {
          var masa=index+getRandomNumber(this.min,this.max);  
        }
        this.massOfPray.push(masa);
        
    }

    this.nutrition();
}