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
      <Box>
        <Typography variant="subtitle1" component="h2">
          {quiz.id}. この地名はなんて読む？
          <img src={`/img/kuizy0${quiz.id}.png`} alt="" />
          {quiz.choices.map((choices) => {
            return <ChoiceList choices={choices} key={choices.id}></ChoiceList>
          })}
        </Typography>
      </Box>
    </>
  )
}

export default Quiz
