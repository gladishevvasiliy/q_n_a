import React from 'react'
import { useRouter } from 'next/router'
import Test from '../../components/Test'

const TestPage = () => {
  const router = useRouter()
  return <Test id={router.query.id} />
}

export default TestPage
