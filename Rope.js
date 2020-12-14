class Rope{
  constructor(bodyA1,pointB1){
      var options = {
          bodyA : bodyA1,
          pointB : pointB1,
          length : 200,
          
      }
      this.sling =  Matter.Constraint.create(options);
     
     this.pointB = pointB1;
     World.add(world, this.sling);
  


}





  display(){
      
        
          var pointA =this.sling.bodyA.position;
          var pointB =this.pointB;
          strokeWeight(5);
          line(pointA.x,pointA.y, pointB.x, pointB.y);
      
     
  }
   
  }

