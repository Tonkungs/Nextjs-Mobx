import React from 'react'
import App, { Container } from 'next/app'
import { Provider } from "mobx-react";
import timeStore from "../stores/timeStore";
class MyApp extends App {
    state = {
        store: new timeStore()
      }
    // Fetching serialized(JSON) store state
  // static async getInitialProps(appContext) {
  //   const appProps = await App.getInitialProps(appContext)
  //   const initialStoreState = await fetchInitialStoreState()

  //   return {
  //     ...appProps,
  //     initialStoreState,
  //   }
  // }

  //   // Hydrate serialized state to store
  //   static getDerivedStateFromProps(props, state) {
  //       state.store.hydrate(props.initialStoreState)
  //       return state
  //   }
    render() {
        const { Component, pageProps } = this.props
        console.log(123);

        return (
            <Container>
                <Provider store={this.state.store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        )
    }
}

export default MyApp