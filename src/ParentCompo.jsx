import React , { Component, createRef }from 'react';
import PureComp from './PureComponent';

const ParentCompo=()=>{
        const componentRef = createRef()

const handleChangeCompoName = ()=>{
        componentRef.current.nameSubmit();
    }
        return(
            <div>
                <PureComp ref={componentRef}/>
                <button className="btn btn-info" onClick={handleChangeCompoName} >test</button>
            </div>
        )
    
}

export default ParentCompo;