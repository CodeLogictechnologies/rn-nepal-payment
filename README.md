# rn-nepal-payment

React-native wrapper which includes all the major payment solutions in Nepal. This package implements the services in a webview in a [Modal](https://github.com/react-native-webview/react-native-webview).

## Installation

```sh
npm install --save react-native-webview  // if you have not already
npm install rn-nepal-payment
```

or

```sh
yarn add react-native-webview  // if you have not already
yarn add rn-nepal-payment
```

# Usage

## Esewa

```JS
import React from 'react';
import { Button, Text, SafeAreaView } from 'react-native';

import { EsewaSdk } from 'rn-nepal-payment';

const EsewaExample = () => {
  const [isVisible, setisVisible] = React.useState(false);
  const [response, setResponse] = React.useState('');

  const _onPaymentComplete = (response) => {
    setResponse(response);
    setisVisible(false);
    return
  }

  return (
    <SafeAreaView>
      <Button
        title={'Esewa test'}
        onPress={() => setisVisible(true)}
        style={{ width: 100, height: 50, backgroundColor: 'red' }}
      />
      {response?.token && <Text>{`ref id: ${response.token}`}</Text>}

      <EsewaSdk
        amt={100} // Amount of product or item or ticket etc
        taxAmt={0} // Tax amount on product or item or ticket etc
        totalAmt={100} // Total payment amount including tax, service and deliver charge. [i.e tAmt = amt + txAmt + psc + tAmt]
        env={'EPAYTEST'} // Merchant code provided by eSewa
        testMode={true} // Boolean value for enabling test endpoint and real payment gateway
        isVisible={isVisible} // Bool to show modal
        onPaymentComplete={_onPaymentComplete} //  Callback from connectips Web Sdk
        pid={"ee2c3ca1-696b-4cc5-a6be-2c40d929d43"} // A unique ID of product or item or ticket etc
        failureURL={`http://merchant.com.np/page/esewa_payment_failed?q=fu`} // Failure URL: a redirect URL of merchant application where customer will be redirected after FAILURE or PENDING transaction
        successURL={`http://merchant.com.np/page/esewa_payment_success?q=su`} // Success URL: a redirect URL of merchant application where customer will be redirected after SUCCESSFUL transaction
        psc={0} // Product service charge amount
        pdc={0} // Product delivery charge amount
        signature={`4Ov7pCI1zIOdwtV2BRMUNjz1upIlT/COTxfLhWvVurE=`}
      />
    </SafeAreaView>
  );
}

export default EsewaExample;


```

For more information please visit [here](https://developer.esewa.com.np/pages/Epay-V2).

## Khalti

```js
import React from 'react';
import { Button, SafeAreaView } from 'react-native';

import { KhaltiSdk } from 'rn-nepal-payment';

const KhaltiExample = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const _onPaymentComplete = (data) => {
    setIsVisible(false);
    const str = data.nativeEvent.data;
    const resp = JSON.parse(str);
    // console.log({ resp })
    if (resp.event === 'CLOSED') {
      // handle closed action
    } else if (resp.event === 'SUCCESS') {
      // console.log({ data: resp.data })
    } else if (resp.event === 'ERROR') {
      // console.log({ error: resp.data })
    }
    return;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title={'Start Khalti'} onPress={() => setIsVisible(true)} />
      <KhaltiSdk
        isVisible={isVisible}
        onPaymentComplete={_onPaymentComplete} // Callback from Khalti Web Sdk
        failureURL={`http://merchant.com.np/page/esewa_payment_failed?q=fu`} // Failure URL: a redirect URL of merchant application where customer will be redirected after FAILURE or PENDING transaction
        successURL={`http://merchant.com.np/page/esewa_payment_success?q=su`}
        uri="https://test-pay.khalti.com/?pidx=bZQLD9wRVWo4CdESSfuSsB"
      />
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default KhaltiExample;
```

For more information please visit [here](https://docs.khalti.com/khalti-epayment/).

## License

MIT
