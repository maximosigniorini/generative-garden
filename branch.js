class Branch {
    constructor(begin, end, porcentaje){
        this.angle = random(0, TWO_PI)
        this.limit = 0
        this.porcentaje = porcentaje
        this.begin = begin
        this.end = end
        this.finished = false
    }

    grow(){
        if(this.porcentaje < 0.7){
            this.porcentaje += 0.2
        }
    }

    root(){
        this.finished = true
        let dirRigth = p5.Vector.sub(this.end, this.begin)
        dirRigth.rotate(this.angle)
        dirRigth.mult(this.porcentaje)
        let newEndRigth = p5.Vector.add(this.end, dirRigth)
        let right = new Branch(this.end, newEndRigth, this.porcentaje) 

        let dirLeft = p5.Vector.sub(this.end, this.begin)
        dirLeft.rotate(-this.angle)
        dirLeft.mult(this.porcentaje)
        let newEndLeft = p5.Vector.add(this.end, dirLeft)
        let left = new Branch(this.end, newEndLeft, this.porcentaje) 

        return [left, right]
    }

    display(){
        stroke(255)
        line(this.begin.x,this.begin.y, this.end.x, this.end.y)
    //     translate(0, - this.len)
        
    //     if(this.len > this.limit){
    //         push()
    //         rotate(this.angle)
    //         branch(this.len * this.porcentaje)
    //         pop()
    
    //         push()
    //         rotate(-this.angle)
    //         branch(this.len * this.porcentaje)
    //         pop()
    //     }
     }
}