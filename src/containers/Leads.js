import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLeads } from "../actions/leads";

export class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getLeads();
  }

  render() {
    return (
      <Fragment>
        <h2>Users List</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.username}</td>
                <td>{lead.email}</td>
                <td>{lead.phone}</td>
                <td>{lead.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  leads: state.leads.leads,
});
export default connect(mapStateToProps, { getLeads })(Leads);
