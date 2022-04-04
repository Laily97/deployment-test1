import React from "react";

class BusTypeComponent extends React.Component{

    render(){
        return(
        <>
            <div style={{border: '1px solid', display: 'flex'}}>
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

export default BusTypeComponent