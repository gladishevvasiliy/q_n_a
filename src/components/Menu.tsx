import React from "react";
import { connect } from "react-redux";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import { getTestNameAndIdList } from "../redux/testList";
import TestWrapper from "./TestWrapper";

const Menu = props => {
  let { path, url } = useRouteMatch();
  const { testNameList } = props;
  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <ListGroup>
            {testNameList.map(item => (
              <ListGroup.Item key={item.id}>
                <Link to={`${url}/tests/${item.id}`}>{item.name}</Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Route>
        <Route path={`${path}/tests/:testId`}>
          <TestWrapper />
        </Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  testNameList: getTestNameAndIdList(state)
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
