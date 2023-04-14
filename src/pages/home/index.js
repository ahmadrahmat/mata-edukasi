// ** MUI Imports
import Grid from '@mui/material/Grid'
import CardStatsSquare from 'src/@core/components/card-statistics/card-stats-square'
import CardActionArea from '@mui/material/CardActionArea'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import Link from 'next/link'
import { styled, useTheme } from '@mui/material/styles'

const Home = () => {
  const LinkStyled = styled(Link)(({ theme }) => ({
    fontSize: '0.875rem',
    textDecoration: 'none',
    color: theme.palette.primary.main
  }))

  return (
    <Grid container spacing={6}>
      <Grid item xs={6} md={3}>
        <LinkStyled href='https://ppdb.gorontalokota.go.id' target='_blank'>
          <CardStatsSquare title='PPDB' avatarColor='primary' icon='tabler:school' iconSize='35' />
        </LinkStyled>
      </Grid>
      <Grid item xs={6} md={3}>
        <LinkStyled href='/second-page'>
          <CardStatsSquare title='Layanan Umum' avatarColor='primary' icon='tabler:briefcase' iconSize='35' />
        </LinkStyled>
      </Grid>
      <Grid item xs={6} md={3}>
        <LinkStyled href='/second-page'>
          <CardStatsSquare
            title='Sistem Verifikasi Keuangan'
            avatarColor='primary'
            icon='tabler:report-money'
            iconSize='35'
          />
        </LinkStyled>
      </Grid>
      <Grid item xs={6} md={3}>
        <LinkStyled href='/second-page'>
          <CardStatsSquare title='Rumah Data' avatarColor='primary' icon='tabler:database' iconSize='35' />
        </LinkStyled>
      </Grid>
      <Grid item xs={6} md={3}>
        <LinkStyled href='/second-page'>
          <CardStatsSquare
            title='Layanan Kepegawaian dan Ketenagaan'
            avatarColor='primary'
            icon='tabler:users'
            iconSize='35'
          />
        </LinkStyled>
      </Grid>
      <Grid item xs={6} md={3}>
        <LinkStyled href='/second-page'>
          <CardStatsSquare
            title='Kontrol Kegiatan Persekolahan'
            avatarColor='primary'
            icon='tabler:building'
            iconSize='35'
          />
        </LinkStyled>
      </Grid>
      <Grid item xs={6} md={3}>
        <LinkStyled href='/second-page'>
          <CardStatsSquare title='Program Inovasi' avatarColor='primary' icon='tabler:lamp-2' iconSize='35' />
        </LinkStyled>
      </Grid>
      <Grid item xs={6} md={3}>
        <LinkStyled href='/second-page'>
          <CardStatsSquare title='Klinik Pembelajaran' avatarColor='primary' icon='tabler:book' iconSize='35' />
        </LinkStyled>
      </Grid>
      <Grid item xs={6} md={3}>
        <LinkStyled href='/second-page'>
          <CardStatsSquare title='Raport Pendidikan' avatarColor='primary' icon='tabler:file-report' iconSize='35' />
        </LinkStyled>
      </Grid>
      <Grid item xs={6} md={3}>
        <LinkStyled href='/second-page'>
          <CardStatsSquare
            title='Frequently Asked Questions (FAQ)'
            avatarColor='primary'
            icon='tabler:question-mark'
            iconSize='35'
          />
        </LinkStyled>
      </Grid>
    </Grid>
  )
}

export default Home
