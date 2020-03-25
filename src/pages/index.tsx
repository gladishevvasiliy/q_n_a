import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Container, Navbar } from 'react-bootstrap'
import { testListLoading } from '../redux/testList'
import Menu from '../components/Menu'
import Cat from '../res/media/icons/cat.svg'

const StyledNavbar = styled(Navbar)`
  margin-bottom: 20px;
`

interface IndexProps {
  loadTestList: any
}

export class Index extends Component<IndexProps> {
  componentDidMount = () => {
    const { loadTestList } = this.props
    loadTestList()
  }

  render() {
    return (
      <>
        <StyledNavbar bg="dark" variant="dark">
          <StyledNavbar.Brand href="/home">Учим крюки</StyledNavbar.Brand>
        </StyledNavbar>
        <Container>
          <Menu />
        </Container>
      </>
    )
  }
}

const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = dispatch => ({
  loadTestList: (data: any) => dispatch(testListLoading(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
