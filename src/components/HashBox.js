import React from 'react'

const HashBox = (props) => {

    return (
        <div className="block w-2/12">
            <div className="text-center">
                {props.index}
            </div>
            <div id={`box-${props.index}`} className="h-5/6 border-4 m-1 p-2 border-black text-center">
                {
                props.element ? 
                    props.element.map((element, index) => {
                        return <div id={`box-${props.index}-element-${index}`} className="rounded" style={{backgroundColor: element[0]}}>[{element[0]}, {element[1]}],</div>
                    })
                    : 
                    ""
                }
            </div>
        </div>
    )
}

export default HashBox
