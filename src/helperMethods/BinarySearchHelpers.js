export const getXPos = (prevNode, root, left = true) => {
    
    const lowerQuartile = Math.floor(window.innerWidth * .9) * .25
    const upperQuartile = Math.floor(window.innerWidth * .9) * .75

    if(prevNode === root){
        let xPos
        left ? xPos = lowerQuartile: xPos = upperQuartile
        return xPos
    }

    let xPos
    const distanceFromPrevNode = (80 - Math.floor((parseInt(prevNode.nodeNumberOnBranch) * 8)))

    if(left){
        if(distanceFromPrevNode > 0){
            xPos = prevNode.x - distanceFromPrevNode
        }
        else {
            xPos = prevNode.x - 18
        }
    }
    else {
        if(distanceFromPrevNode > 0){
            xPos = prevNode.x + distanceFromPrevNode
        }
        else {
            xPos = prevNode.x + 18
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

export const resetCanvas = () => {
    const canvas = document.getElementById("tree-canvas")
    if(canvas.getContext){
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.clearRect(0, 0, window.innerWidth * .9, window.innerHeight * .9);
        ctx.closePath();
    }
}