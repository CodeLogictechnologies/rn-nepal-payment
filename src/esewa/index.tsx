import React, { useEffect, useState } from "react"
import { View, Modal, SafeAreaView } from "react-native"

import CloseIcon from "../common/CloseIcon"
import { styles } from "../common/styles"
import EsewaPayment from "../common/Webview"
import { sourceGenerator } from "./helpers/htmlGenerator"
import {  EsewaStatus, type EsewaReponseData, type EsewaSdkProps } from "../typings"
import type { WebViewNavigation } from "react-native-webview"
import { enc } from "./helpers/crypto"

const EsewaSdk = (props: EsewaSdkProps) => {
  const { 
    successURL, 
    failureURL, 
    onPaymentComplete, 
    isVisible, 
    amt,
    psc,
    pdc,
    pid,
    env,
    taxAmt,
    totalAmt,
    testMode,
    signature 
  } = props

  const [responseData, setResponseData] = useState<EsewaReponseData | undefined>()
  

  useEffect(() => {
    responseData && _handlePaymetProcess()
    return
  }, [responseData])

  const _handlePaymetProcess = () => {
    try {
      if (responseData?.status === EsewaStatus.COMPLETE) {
        return onPaymentComplete(responseData)
      } else if (responseData?.status === EsewaStatus.CANCELED) {
        return onPaymentComplete({
          message: "Sorry, your payment has been cancelled from esewa.",
        })
      } else if (responseData?.status === EsewaStatus.NOT_FOUND) {
        return onPaymentComplete({
          message: "Sorry, your payment session has expired. Please try again.",
        })
      } else if (responseData?.status === EsewaStatus.PENDING) {
        return onPaymentComplete({
          message: "Your payment is taking a long time to complete.",
        })
      } else {
        return onPaymentComplete({
          message: "Sorry, your payment process could not be completed",
        })
      }
    } catch (err) {
      return onPaymentComplete({
        message: "Sorry, your payment process could not be completed",
      })
    }
  }

  const _onClose = () =>
    onPaymentComplete({
      message: "Payment process interrupted",
    })

  const _onNavigationStateChange = (state: WebViewNavigation) => {
    const base64String = state.url?.split("data=")?.[1]
    if(base64String) {
      const parsed = enc.Base64.parse(base64String)
      const textString = enc.Utf8.stringify(parsed)
      const json = JSON.parse(textString);
      setResponseData(json)
    }
  }

  return (
    <Modal animationType={"slide"} visible={isVisible}>
      <View style={styles.container}>
        <SafeAreaView style={styles.safeAreaView}>
          <View style={styles.wrapper}>
            <CloseIcon onClose={_onClose} />

            <EsewaPayment
              source={{
                html: sourceGenerator({
                  amt: amt,
                  psc: psc,
                  pdc: pdc,
                  pid: pid,
                  env: env,
                  taxAmt: taxAmt,
                  successURL: successURL,
                  failureURL: failureURL,
                  totalAmt: totalAmt,
                  testMode: testMode,
                  signature: signature,
                }),
              }}
              onNavigationStateChange={_onNavigationStateChange}
            />
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  )
}

export default EsewaSdk
