import React from 'react';
import './index.scss';

class DragDropFile extends React.Component {
	constructor(props){
		super(props);
		this.onDrop = this.onDrop.bind(this);
		this.suppress = this.suppress.bind(this);
	}

	onDrop(evt){ 
		evt.stopPropagation(); 
		evt.preventDefault();
		const files = evt.dataTransfer.files;
		if(files && files[0]) this.props.handleFile(files[0]);
	};

	suppress(evt){ 
		evt.stopPropagation(); 
		evt.preventDefault(); 
	};

	render() { 
		return (
			<div className="dragDropFile-container" onDrop={this.onDrop} onDragEnter={this.suppress} onDragOver={this.suppress}>
				{this.props.children}
			</div>
		);  
	}
};

export default DragDropFile;