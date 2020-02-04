import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { Container, Navbar } from "react-bootstrap";

import { testListLoading } from "../redux/testList";
import Menu from "../components/Menu";

const StyledNavbar = styled(Navbar)`
  margin-bottom: 20px;
`;

interface IndexProps {
  loadTestList: any;
}

export class Index extends Component<IndexProps> {
  componentDidMount = () => {
    const { loadTestList } = this.props;
    loadTestList();
  };

  render() {
    return (
      <>
        <StyledNavbar bg="dark" variant="dark">
          <StyledNavbar.Brand href="/home">Учим крюки</StyledNavbar.Brand>
        </StyledNavbar>
        <Container>
          <Router>
            <Switch>
              <Route path="/home">
                <Menu />
              </Route>
            </Switch>
          </Router>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = dispatch => ({
  loadTestList: (data: any) => dispatch(testListLoading(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
