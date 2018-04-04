import XLSX from 'xlsx';
import React from 'react';
import DragDropFile from './DragDropFile';
import DataInput from './DataInput';
import './index.scss';

class XlsToJson extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: [],
			showInvalidMsg : false,
			fileName: ""
		}
		this.handleFile = this.handleFile.bind(this);
	}
	
	handleFile(file){
		//File Validation
		if( !this.validateFileExtension(file.name) ) { console.log("1"); return; }

		//Parsing File data into JSON
		const reader = new FileReader();
		const rABS = !!reader.readAsBinaryString;
		reader.onload = (e) => {
			const bstr = e.target.result;
			const wb = XLSX.read(bstr, {type:rABS ? 'binary' : 'array'});
			const wsname = wb.SheetNames[0];
			const ws = wb.Sheets[wsname];
			const data = XLSX.utils.sheet_to_json(ws, {header:1});  /* Array of Rows [ [A1, B1, C1], [A2, B2, C2]] */ 
			this.setState({ data: data }, () => this.props.onJSONOutput(this.state.data));
		};
		if(rABS) reader.readAsBinaryString(file); else reader.readAsArrayBuffer(file);			
	};

	validateFileExtension(fileName){
		if(/(\.xls|\.xlsx|\.csv|\.xlsb|\.xlsm)$/i.exec(fileName)){
			this.setState({ showInvalidMsg: false, fileName: fileName });
			return true;
		}
		else{
			this.setState({ showInvalidMsg: true, fileName: "" });
			return false;
		}
	}
	
	render() {
		let selectedFileName = <p className="watermark" >Drag and Drop a file here.</p>;
		if(this.state.showInvalidMsg){
			selectedFileName = <p className="invalidMsg" >Invalid File Type Selected! Please select a valid file type.</p>
		}
		if(this.state.fileName){
			selectedFileName = <p>Chosen File Name: {this.state.fileName}</p>
		}

		return (
			<div className="xlsToJson-container">
				<DragDropFile handleFile={this.handleFile}>
					<DataInput handleFile={this.handleFile} />
					{ selectedFileName }
				</DragDropFile>
			</div>
		); 
	}
};


export default XlsToJson;