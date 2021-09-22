class Ground
{
constructor(x, y, w, h)
{
    let options =  {
    isStatic:true
    };
    
    this.body  = Bodies.rectangle(x,y,w,h,options);
    this.h = h;
    this.w = w;
    this.x = x;
    this.y = y;
    World.add(world,this.body);
}

show(){
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    fill("yellow");
    rect(pos.x,pos.y,this.w,this.h);
    pop();
}

}