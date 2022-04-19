import { Box, Typography } from '@mui/material'
import { FC, useState } from 'react'

import { Quiz } from '../../data'
import Answer from '../Answer'
import ChoiceList from '../ChoiceList'

// TODO:↓分からん
export type ButtonStyle = {
  color:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
  variant: 'text' | 'outlined' | 'contained'
}

type QuizProps = {
  quiz: Quiz
}

const Quiz: FC<QuizProps> = ({ quiz }) => {


  return (
    <>
      
    </>
  )
}

export default Quiz
