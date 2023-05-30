import React, { Component } from "react";

export default class FormManagement extends Component {
  state = {
    validConfirm: {
      id: "",
      name: "",
      email: "",
      phone: "",
    },
    validError: {
      id: "",
      name: "",
      email: "",
      phone: "",
    },
  };

  takeInput = (event) => {
    //Take input from the Student Form
    let { id, value } = event.target;
    let newValidConfirm = { ...this.state.validConfirm };
    newValidConfirm[id] = value;
    //Check validation
    let notice = ''
    if (value.trim()==='') {
      notice = 'Not be blank !'
    }
    let regexID = /^\d+$/  
    let regexLength =/^.{5,10}$/gm
    let regexEmail = /\S+@\S+\.\S+/
    let regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/ 
    let regexName =  /[^0-9]/
    if (!regexID.test(newValidConfirm.id) & !regexLength.test(newValidConfirm.id) & !regexEmail.test(newValidConfirm.email) & !regexPhone.test(newValidConfirm.phone) & !regexName.test(newValidConfirm.name))  {
      notice = 'Not valid !'
    } 
    
    
    let newValidError = {...this.state.validError}
    newValidError[id] = notice
    this.setState({
      validConfirm: newValidConfirm,
      validError: newValidError
    })
  };

  //Prevent reload form => save data
  preventReloadForm = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <div className="container">
        <br />
        <br />
        <form className="card" onSubmit={this.preventReloadForm}>
          <main className="card-header">
            <h2 className="text-danger text-center m-3">
              College Student Information Management
            </h2>
          </main>
          <main className="card-body">
            <article className="row">
              <nav className="col-6 my-2">
                <div className="form-group">
                  <label htmlFor="" className="fs-5 fw-bolder">
                    ID Student
                  </label>
                  <input
                    data-type="number"
                    type="text"
                    name="id"
                    id="id"
                    className="form-control"
                    onInput={this.takeInput}
                  />
                  <p className="text-danger mt-2">{this.state.validError.id}</p>
                </div>
              </nav>
              <nav className="col-6 my-2">
                <div className="form-group">
                  <label htmlFor="" className="fs-5 fw-bolder">
                    Full Name
                  </label>
                  <input
                    data-type="text"
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    onInput={this.takeInput}
                  />
                  <p className="text-danger mt-2">
                    {this.state.validError.name}
                  </p>
                </div>
              </nav>
              <nav className="col-6 my-2">
                <div className="form-group">
                  <label htmlFor="" className="fs-5 fw-bolder">
                    Email
                  </label>
                  <input
                    data-type="email"
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    onInput={this.takeInput}
                  />
                  <p className="text-danger mt-2">
                    {this.state.validError.email}
                  </p>
                </div>
              </nav>
              <nav className="col-6 my-2">
                <div className="form-group">
                  <label htmlFor="" className="fs-5 fw-bolder">
                    Phone Number
                  </label>
                  <input
                    data-type="number"
                    type="text"
                    name="phone"
                    id="phone"
                    className="form-control"
                    onInput={this.takeInput}
                  />
                  <p className="text-danger mt-2">
                    {this.state.validError.phone}
                  </p>
                </div>
              </nav>
            </article>
          </main>
          <main className="card-footer">
            <button className="btn btn-success mx-3" type="submit">
              <i className="fa fa-add"></i> Add
            </button>
            <button className="btn btn-primary mx-3">
              <i className="fa fa-edit"></i> Edit
            </button>
          </main>
        </form>
      </div>
    );
  }
}
