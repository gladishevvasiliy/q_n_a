import React from 'react'
import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import Test from '../../components/Test'

const CenteredContainer = styled(Container)`
  display: flex;
  justify-content: center;
`

const TestPage = () => {
  const router = useRouter()
  return (
    <CenteredContainer>
      <Test id={router.query.id} />
    </CenteredContainer>
  )
}

export default TestPage
