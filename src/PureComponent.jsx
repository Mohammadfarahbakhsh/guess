import { createRef, forwardRef, memo, useEffect, useImperativeHandle, useState } from "react"
const PureComp = forwardRef((props, ref) => {
    const [name, setName] = useState("")
    const [counter, setCounter] = useState(0)
    const myInput = createRef()
    const nameSubmit = () => {
        const inputValue = myInput.current.value;
        setName(inputValue);
        if (inputValue.trim() !== "") {
            if (inputValue !== name) {
                setCounter(c => c + 1)
            }
        }
    }
    useImperativeHandle(ref, () => ({
        nameSubmit
    }))
    useEffect(() => {
        myInput.current.focus()
    }, [])

    return (
        <div className="form-fa-group text-center mt-4 p-3">
            <h4 className="text-center text-light">
                حدس کلمه
            </h4>
            <input ref={myInput} type="text" autoComplete="off" className="form-control " />
            <button onClick={nameSubmit} className=" btn btn-success text-light my-3">ثبت</button>
            <button onClick={() => { myInput.current.value = "" }} className="btn btn-secondary my-3 mx-2">مخفی</button>
            <br />
            <span className="text-light" >{counter}</span>
        </div>
    )
})
export default memo(PureComp)


















































// import React , {createRef, PureComponent}from 'react';
// class PureCompo extends PureComponent{
//     constructor(){
//         super()
//         this.state = {
//             name:""
//         }
//         this.counter = 0
//         this.myInput = createRef()
//     }
//     handleChangeName = ()=>{
//         this.setState({
//             name :this.myInput.current.value
//         })
//     }
//     componentDidMount(){
//         this.myInput.current.focus()
//     }
//     render(){
//         return(
//             <div className="form-fa-group text-center mt-4 p-3">
//                 <h4 className="text-center text-dark">حدث کلمه</h4>
//                 <input ref={this.myInput} type="text" className="form-control" autoComplete="off"/>
//                 <button className="btn btn-warning my-3" onClick={this.handleChangeName}>ثبت</button>
//                 <button className="btn btn-secondary my-3 mx-2" onClick={()=>{this.myInput.current.value = ""}}>مخفی</button>
//                 <br />
//                 <span>{this.counter++}</span>
//             </div>
//         )
//     }
// }
// export default PureCompo;

