import React from "react";

class FilterComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            selectBusStopCode: null
        }
    }

    handleChange(e){
        this.setState({
            selectBusStopCode:e.target.value
        });
        console.log(e.target.value);
    }

    render(){
        return(
        <>
            <div style={{display: 'flex', justifyContent: 'center', padding: '10px'}}>
                <div style={{flexBasis: '200px'}}>
                    <h5>Bus stop code:</h5><br />
                    <select className="form-control" onChange={this.handleChange}>
                        <option>Select Bus Stop Code</option>
                        {this.props.listBusStopCode.map((row, id) => {
                        return <option key={id} value={row.BusStopCode}>{row.BusStopCode}</option>;
                        })}
                    </select>
                </div>

                <div style={{flexBasis: '200px'}}>
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