import React, { Component } from "react";
import FormManagement from "./FormManagement";

export default class Management extends Component {
  render() {
    return (
      <main className="container">
        <article>
          <FormManagement />
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
                  <thead>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>PHONE NUMBER</th>
                  </thead>
                  <br />
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Lê Đình Huy</td>
                      <td>ledinhhuy0105@gmail.com</td>
                      <td>0865807237</td>
                      <td>
                        <button className="btn btn-danger mx-2">
                          <i className="fa fa-trash"></i>
                        </button>
                        <button className="btn btn-primary mx-2">
                          <i className="fa fa-edit"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </nav>
          </main>
        </article>
      </main>
    );
  }
}
