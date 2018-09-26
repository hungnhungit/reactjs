import React from 'react';




export default class Tester extends React.Component {

	constructor(){
		super()
	}

	testFunc(){
		return 'hungit'
	}

    render() {
        	
        var { path } = this.props.match


        const number = 1

        return (
            <div className="Tester">
               {this.props.apiName}
               {path}
               {this.testFunc()}
               {number}
            </div>
        );
    }
}


