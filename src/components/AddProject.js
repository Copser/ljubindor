import React, { Component } from 'react';
import uuid from 'uuid';



class AddProject extends Component {

  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }

  static defaultProps = {
    categories: ['Price $', 'Price Bitcoin']
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert("Title is required");
    } else {
      this.setState({newProject:{
        id:uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        // console.log(this.state);
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }

  handleInputChange(event){
    console.log(event);
    let value=event.target.value;
    switch (value) {
      case "safex":
          
        break;
      default:
        console.log("Unknown value: " + value);
    }
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" onChange={this.handleInputChange.bind(this)} />
          </div>
          <div>
            <label>Category</label><br />
            <select ref="category">
                {categoryOptions}
            </select>
            <br />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddProject;
