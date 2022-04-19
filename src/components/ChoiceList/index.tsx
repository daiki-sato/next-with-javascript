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
      {choices.map((choice, index) => {
        return (
          <Box key={index} sx={{ width: '100%', mb: 2 }}>
            <Button
              variant={buttonStyle[index].variant}
              fullWidth={true}
              color={buttonStyle[index].color}
              sx={{
                justifyContent: 'start',
                py: 1,
                fontWeight: 'bold',
              }}
              onClick={() => handleClick(index)}
            >
              選択肢：{choice}
              index:{index}
              {/* {buttonStyle} */}
            </Button>
          </Box>
        )
      })}
    </>
  )
}

export default ChoiceList
