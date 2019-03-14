function Hunt(){
    var newBear=new Bear();
    this.pray=[];
    this.days=[];
    
        

        this.nextDay=function(){
            for (var index = 1; index <= 30; index++) {
                var den=new Newday(index);
                this.days.push(den);

            }
            
        }
        this.nextDay();

    
    
        this.generatePray=function(){
            for(var index=1;index<=30;index++){
                var zhrtva=new Pray(names[getRandomNumber(1, 4)]+"-"+index);
                this.pray.push(zhrtva);
            }
        } 
        this.generatePray(); 




    


    // this.hunt=function(){
    //     for (var index = 1; index <= 30; index++) {
                
    //         if (calculatePercent(30)) {
    //             this.mass=this.mass + this.massOfPray;
    //            console.log("This day" + "[" + index + "]" +"the bear gained mass  30%" );
    //         }

    //         else if (calculatePercent(20)) {
    //             this.mass=(this.mass * 0.2)+this.mass+0.3;
    //            ("This day" + "[" + index + "]" +"the bear decresed mass for 20%"+"-"+names[0]+"and gaind 30% mass");
    //         }

    //         else{
    //             this.mass=(this.mass * 0.2 );
    //             ("This day" + "[" + index + "]" +"the bear decresed mass for 20%")
    //         } 
    //     }
    // }
    // this.days.push();

}