/**
 * this is just the next js way of including the navbar on every component, similar to layout
 */

import React from 'react'
import App, { Container as NextContainer } from 'next/app'
import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Header from '../components/navbar'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <NextContainer>
        <Head>
          <title>Thoughts!</title>
        </Head>
        <Header />
        <Container>
          <Jumbotron>
            <Component {...pageProps} />
          </Jumbotron>
        </Container>
      </NextContainer>
    )
  }
}

export default MyApp
