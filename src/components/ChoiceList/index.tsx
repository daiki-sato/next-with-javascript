import { Box, Button } from '@mui/material'
import { FC } from 'react'

import { ButtonStyle } from '../Quiz'

type ChoiceListProps = {
  choices: string[]
  buttonStyle: ButtonStyle[]
  handleClick: (choiceIndex: number) => void
}

const ChoiceList: FC<ChoiceListProps> = ({
  choices,
  buttonStyle,
  handleClick,
}) => {
  return (
    <>
      <Box>
        <Button variant="outlined">{choices}</Button>
      </Box>
    </>
  )
}

export default ChoiceList
