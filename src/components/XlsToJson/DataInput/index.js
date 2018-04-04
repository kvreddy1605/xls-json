import React from 'react';
import './index.scss';

class DataInput extends React.Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		const files = e.target.files;
		if(files && files[0]) this.props.handleFile(files[0]);
	};

	render() { 
		return (
			<div className="dataInput-container" >
				<form>
					<label>Browse a file with type xls or csv.</label> <br />
					<input type="file" id="file" accept=".xls, .xlsx, .csv, .xlsb, .xlsm" onChange={this.handleChange} />
				</form>
			</div>
		); 
  	}
}

export default DataInput;