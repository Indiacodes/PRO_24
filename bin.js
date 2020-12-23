var yes;
var no;
var no2;

class Bin {
    constructor(){
        var binOptions = {
            isStatic:true
        }


        this.bodyBottom = Bodies.rectangle(580, 680,100,10, binOptions);
        this.bodyLeft = Bodies.rectangle(530,645,10,80, binOptions);
        this.bodyRight = Bodies.rectangle(635, 645, 10, 80, binOptions);
    }

    showBin(){
        rectMode(CENTER);
        yes = rect(this.bodyBottom.position.x, this.bodyBottom.position.y, 110, 10);
        no = rect(this.bodyLeft.position.x, this.bodyLeft.position.y, 10, 80);
        no2 = rect(this.bodyRight.position.x, this.bodyRight.position.y, 10, 80);
    }
}