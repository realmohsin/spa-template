import React from 'react'
import { Box, Grid, Button, Typography } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {
  Home as HomeIcon,
  HomeOutlined as HomeOutlinedIcon,
  HomeRounded as HomeRoundedIcon,
  HomeTwoTone as HomeTwoToneIcon,
  HomeSharp as HomeSharpIcon
} from '@material-ui/icons'

const HomePage = props => {
  const classes = useStyles()
  const theme = useTheme()
  const atSmDown = useMediaQuery(theme.breakpoints.down('sm'))
  const atXsDown = useMediaQuery(theme.breakpoints.down('xs'))
  const atMdUp = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <>
      <Box width='10%' m='5rem auto'>
        <img
          alt='Logo'
          src='https://image.flaticon.com/icons/svg/1147/1147083.svg'
        />
      </Box>
      <Box m='2rem auto' width='max-content' fontSize='4rem'>
        <HomeIcon fontSize='inherit' />
        <HomeOutlinedIcon fontSize='inherit' />
        <HomeRoundedIcon fontSize='inherit' />
        <HomeTwoToneIcon fontSize='inherit' />
        <HomeSharpIcon fontSize='inherit' />
      </Box>
      <Typography gutterBottom variant='h1' align='center'>
        h1 hello world
      </Typography>
      <Typography variant='h2' align='center'>
        h2 hello world
      </Typography>
      <Typography variant='h3' align='center'>
        h3 hello world
      </Typography>
      <Typography variant='h4' align='center'>
        h4 hello world
      </Typography>
      <Typography variant='h5' align='center'>
        h5 hello world
      </Typography>
      <Typography variant='h6' align='center'>
        h6 hello world
      </Typography>
      <Typography variant='subtitle1' align='center'>
        subtitle1 hello world
      </Typography>
      <Typography variant='subtitle2' align='center'>
        subtitle2 hello world
      </Typography>
      <Typography variant='body1' paragraph align='center'>
        body1 hello world
      </Typography>
      <Typography variant='body2' gutterBottom align='center'>
        body2 hello world
      </Typography>
      <Box width='4rem' height='4rem' bgcolor='primary.main' m='2rem auto' />
      <Grid component='section' container>
        <Grid item xs={6} container justify='center'>
          <Button variant='outlined' color='secondary'>
            hello world
          </Button>
        </Grid>
        <Grid item xs={6} container justify='center'>
          <Button variant='contained' color='secondary'>
            hello world
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

const useStyles = makeStyles(theme => ({
  buttonStyles: {
    ...theme.myOwnKey.buttonStyles,
    letterSpacing: '0.3rem'
  }
}))

export default HomePage
