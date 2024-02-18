export const sourceGenerator = ({
  amt,
  taxAmt,
  totalAmt,
  psc = 0,
  pdc = 0,
  pid,
  successURL,
  failureURL,
  env = "EPAYTEST",
  testMode = true,
  signature
}) => `
<html>
  <head>
    <style>
      body {
        margin: 0;
        padding: 0;
        height: inherit;
        background-color: #e4e4e4;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .loader {
        border: 6px solid #f3f3f3;
        border-radius: 50%;
        border-top: 6px solid #3498db;
        width: 50px;
        height: 50px;
        -webkit-animation: spin 2s linear infinite;
        /* Safari */
        animation: spin 2s linear infinite;
      }

      /* Safari */
      @-webkit-keyframes spin {
        0% {
          -webkit-transform: rotate(0deg);
        }

        100% {
          -webkit-transform: rotate(360deg);
        }
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }
    </style>
  </head>
  <body>
    <div class="loader"></div>
    <form id="myForm" action='https://${testMode ? "rc-epay." : "epay."}esewa.com.np/api/epay/main/v2/form' method='POST' hidden>
      <input type="text" id="amount" name="amount" value='${amt}' required>
      <input type="text" id="tax_amount" name="tax_amount" value='${taxAmt}' required>
      <input type="text" id="total_amount" name="total_amount" value='${totalAmt}' required>
      <input type="text" id="transaction_uuid" name="transaction_uuid" value='${pid}' required>
      <input type="text" id="product_code" name="product_code" value ='${env}' required>
      <input type="text" id="product_service_charge" name="product_service_charge" value='${psc}' required>
      <input type="text" id="product_delivery_charge" name="product_delivery_charge" value='${pdc}' required>
      <input type="text" id="success_url" name="success_url" value='${successURL}' required>
      <input type="text" id="failure_url" name="failure_url" value='${failureURL}' required>
      <input type="text" id="signed_field_names" name="signed_field_names" value="total_amount,transaction_uuid,product_code" required>
      <input type="text" id="signature" name="signature" value='${signature}' required>
      <input value="Submit" type="submit">
    </form>
    <script>
      var auto_refresh = setInterval(function () {
        submitform();
      }, 500);

      function submitform() {
        document.getElementById('myForm').submit();
      }

    </script>

  </body>
</html>
`;
//# sourceMappingURL=htmlGenerator.js.map