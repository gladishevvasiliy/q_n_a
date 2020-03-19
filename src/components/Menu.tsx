import React from 'react'
import { connect } from 'react-redux'
import ListGroup from 'react-bootstrap/ListGroup'
import Link from 'next/link'
import { getTestNameAndIdList } from '../redux/testList'

const Menu = props => {
  const { testNameList } = props
  return (
    <>
      <ListGroup>
        {testNameList.map(item => (
          <ListGroup.Item key={item.id}>
            <Link href="/test/[id]" as={`/test/${item.id}`}>
              <a>{item.name}</a>
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  )
}

const mapStateToProps = state => ({
  testNameList: getTestNameAndIdList(state),
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
