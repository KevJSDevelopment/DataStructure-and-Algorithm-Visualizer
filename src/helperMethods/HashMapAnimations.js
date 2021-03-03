export const addToBox  = (boxIndex, key, value) => {

    const box = document.getElementById(`box-${boxIndex}`)

    box.style.borderColor = "orange"
    addMessage(`Pushed key value pair [${key},${value}] to the end of the array located in index ${boxIndex}`)
    setTimeout(() => box.style.borderColor = "black", 2500)
}


export const addMessage = (info, color = "green") => {
    const messageBoard = document.getElementById("message-board")
    messageBoard.style.verticalAlign = "bottom"

    let messageColor;
    
    const message = document.createElement("div")
    message.innerHTML = info

    if(color === "green") messageColor = "0, 255, 0"
    else messageColor = "255, 0, 0"
    message.style.width = "90%"
    message.style.margin = "2%"
    message.style.backgroundColor = `rgba(${messageColor}, 1)`
    messageBoard.appendChild(message)
    setTimeout(() => fadeElement(messageBoard, message, 1, messageColor), 50)
}

export const findElement = (boxIndex, key) => {
    
}

const fadeElement = (container, element, alpha = 1, color = '0, 255, 0') => {
    alpha = alpha - 0.02
    if(alpha > 0){
        element.style.color = `rgba(0, 0, 0, ${alpha})`
        element.style.backgroundColor = `rgba(${color}, ${alpha})`
        setTimeout(() => fadeElement(container, element, alpha, color), 50)
    }else {
        container.removeChild(element)
    }
}