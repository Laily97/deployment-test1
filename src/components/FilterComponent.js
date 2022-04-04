import React from "react";

class FilterComponent extends React.Component{

    render(){
        return(
        <>
            <div style={{display: 'flex', justifyContent: 'center', padding: '10px'}}>
                <div>
                    <label>Bus stop code:</label><br />
                    <select className="form-control">
                        <option>Select </option>
                    </select>
                </div>

                <div>
                    <label>Bus number:</label><br />
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