export const getXPos = (prevNode, root, left = true) => {

    
    const start = 0
    const end = Math.floor(window.innerWidth * .9)
    const midPoint = Math.floor(end / 2)
    const firstQuadrant = Math.floor((midPoint - (midPoint * .5)))
    const thirdQuadrant = Math.floor((midPoint + (midPoint * .5)))
    
    if(prevNode === root){
        let xPos
        left ? xPos = firstQuadrant : xPos = thirdQuadrant
        return xPos
    }

    let xPos
    if(left){

        const defaultPos = prevNode.x - 25

        if(prevNode.x > midPoint){
            if(prevNode.x > thirdQuadrant) {
                if(prevNode.x - (Math.floor(((prevNode.x - thirdQuadrant) / 4))) < defaultPos){
                    xPos = prevNode.x - (Math.floor(((prevNode.x - thirdQuadrant) / 4)))
                } else {
                    xPos = defaultPos
                }
            }
            else {
                if(prevNode.x - (Math.floor(((prevNode.x - midPoint) / 4))) < defaultPos){
                    xPos = prevNode.x - (Math.floor(((prevNode.x - midPoint) / 4)))
                } else {
                    xPos = defaultPos
                }
            }
        } else {
            if(prevNode.x >= firstQuadrant) {
                if(prevNode.x - (Math.floor(((midPoint - prevNode.x) / 4))) < defaultPos){
                    xPos = prevNode.x - (Math.floor(((midPoint - prevNode.x) / 4)))
                }
                else {
                    xPos = defaultPos
                }
            }
            else {
                if(prevNode.x - (Math.floor((prevNode.x / 4))) < defaultPos){

                    xPos = prevNode.x - (Math.floor((prevNode.x / 4)))
                }
                else {
                    xPos = defaultPos
                }
            }
        }
    }
    else {

        const defaultPos = prevNode.x + 25

        if(prevNode.x > midPoint){
            if(prevNode.x >= thirdQuadrant) {
                if(prevNode.x + (Math.floor(((end - prevNode.x) / 4))) < defaultPos){
                    xPos = prevNode.x + (Math.floor(((end - prevNode.x) / 4)))
                }
                else {
                    xPos = defaultPos
                }
            }
            else {
                if(prevNode.x + (Math.floor(((thirdQuadrant - prevNode.x) / 4))) < defaultPos){
                    xPos = prevNode.x + (Math.floor(((thirdQuadrant - prevNode.x) / 4)))
                }
                else {
                    xPos = defaultPos
                }
            }
        } else {
            if(prevNode.x >= firstQuadrant) {
                if(prevNode.x + (Math.floor(((midPoint - prevNode.x) / 4))) < defaultPos){
                    xPos = prevNode.x + (Math.floor(((midPoint - prevNode.x) / 4)))
                }
                else {
                    xPos = defaultPos
                }
                
            }
            else {
                if(prevNode.x + (Math.floor(((firstQuadrant - prevNode.x) / 4))) < defaultPos){
                    xPos = prevNode.x + (Math.floor(((firstQuadrant - prevNode.x) / 4)))
                }
                else {
                    xPos = defaultPos
                }
            }
        }
    }

    return xPos
}

export const drawNode = (value, xPos, yPos, w, color = "#000000", startAngle = 1.9 * Math.PI) => {
    const canvas = document.getElementById("tree-canvas")

    
    if(canvas.getContext){
        let ctx = canvas.getContext("2d");

        if(startAngle > 0){
            ctx.beginPath();
            ctx.arc(xPos, yPos, w, startAngle, 2 * Math.PI, false);
            ctx.strokeStyle = color
            ctx.stroke()
            setTimeout(() => drawNode(value, xPos, yPos, w, color, startAngle - .1), 20)
        }
        else {
            ctx.beginPath();
            ctx.arc(xPos, yPos, w, 0, 2 * Math.PI, false);
            ctx.stroke()
            ctx.font = '10pt Georgia';
            ctx.fillStyle = color;
            ctx.textAlign = 'center';
            ctx.fillText(value, xPos, yPos + 3);
        }
    }
}

export const drawConnection = (x1, y1, x2, y2, color = "#000000") => {

    const canvas = document.getElementById("tree-canvas")
    if(canvas.getContext){
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = color
        ctx.stroke(); 
    }
}