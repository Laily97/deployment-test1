import React from "react";

class FilterComponent extends React.Component{

    render(){
        return(
        <>
            <div style={{display: 'flex', justifyContent: 'center', padding: '10px'}}>
                <div style={{flexBasis: 200px}}>
                    <h5>Bus stop code:</h5><br />
                    <select className="form-control">
                        <option>Select </option>
                    </select>
                </div>

                <div style={{flexBasis: 200px}}>
                    <h5>Bus number:</h5><br />
                    <select className="form-control">
                        <option>Select </option>
                    </select>
                </div>
            </div>
        </>
        )
    }
}

export default FilterComponent