import React from 'react';

function poem(content){
  let arr = content.replace(/\s+/g, ' ').trim().split('\n')
  let firstln = arr[0].split(' ')
  let secondln = arr[1] ? arr[1].split(' ') : ''
  let thirdln = arr[2] ? arr[2].split(' ') : ''
  if (arr.length === 3 && firstln.length === 5 && secondln.length === 3 && thirdln.length === 5){
    }
}

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      error: 'This poem is not written in the right structure!'
    };
    this.changeHandler = this.changeHandler.bind(this)
  }



  changeHandler(event){
    event.preventDefault()
    if (poem(event.target.value)){
    this.setState({
      value: event.target.value,
      error: ''
    }
  }
}



  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value = {this.state.value} onChange = {this.changeHandler}/>
        <div id="poem-validation-error" style={{color: 'red'}}>{this.state.error}</div>
      </div>
    );
  }
}
