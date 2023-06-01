import React, { Component, createRef } from "react";
import FormManagement from "./FormManagement";

export default class Management extends Component {
  constructor(props) {
    super(props)
    this.childRef = createRef()
    this.state = {
      arrStudent: [
        {
          id: 1657,
          name: "Lê Đình Huy",
          email: "ledinhhuy@gmail.com",
          phone: "0865807237",
        },
        {
          id: 5672,
          name: "Lê Đức Tú",
          email: "leductu@gmail.com",
          phone: "0988567345",
        },
      ]
    };
  }

  addStudent = (studentClick) => {
    let newArrStudent = [...this.state.arrStudent];
    newArrStudent.push({ ...studentClick });
    this.setState({
      arrStudent: newArrStudent,
    });
  };

  deleteStudent = (studentClickID) => {
    let index = this.state.arrStudent.findIndex(
      (student) => student.id === studentClickID
    );
    if (index !== -1) {
      this.state.arrStudent.splice(index, 1);
      this.setState({
        arrStudent: this.state.arrStudent,
      });
    }
  };


  renderStudent = () => {
    return this.state.arrStudent.map((student) => {
      return (
        <tr key={student.id} className="fs-5">
          <td className="fw-bold">{student.id}</td>
          <td>{student.name}</td>
          <td>{student.email}</td>
          <td>{student.phone}</td>
          <td>
            <button
              className="btn btn-danger m-2"
              onClick={() => {
                this.deleteStudent(student.id);
              }}
            >
              <i className="fa fa-trash"></i>
            </button>
            <button
              className="btn btn-primary m-2"
            >
              <i className="fa fa-edit"></i>
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <main className="container">
        <article>
          <FormManagement
            addStudent={this.addStudent}
            studentRewire={this.state.studentRewire}
          />
        </article>
        <article>
          <main className="container mt-5">
            <nav className="card">
              <div className="card-header">
                <h3 className="text-danger text-center mt-3">
                  College Student Information
                </h3>
              </div>
              <div className="card-body">
                <table className="w-100 mt-3 mx-auto">
                  <thead className="fw-bolder text-primary fs-4">
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>PHONE NUMBER</th>
                    <th>FEATURE</th>
                  </thead>
                  <br />
                  <tbody>{this.renderStudent()}</tbody>
                </table>
              </div>
            </nav>
          </main>
        </article>
      </main>
    );
  }
}
