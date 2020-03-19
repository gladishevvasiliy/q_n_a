import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getCurrentTestProgressValue } from '../redux/testing'
import { getTestLength } from '../redux/currentTest'

const FullBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: #eceff1;
  border-radius: 15px;
`
const FinishedBar = styled.div`
  width: 20%;
  height: 100%;
  background-color: #8bc34a;
  border-radius: 15px;

  :after {
    content: '';
    /* width: 70% */
    background-color: #fff;
    border-radius: 98px;
    display: block;
    height: 7px;
    opacity: 0.2;
    margin: 0 10px 0 15px;
    transform: translate3d(0, 4px, 0);
  }
`

const ProgressBar = ({ progress }) => {
  console.log({ progress })
  return (
    <FullBar>
      <FinishedBar progress={progress} />
    </FullBar>
  )
}

const mapStateToProps = state => ({
  progress: getCurrentTestProgressValue(state),
  testLength: getTestLength(state),
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar)
