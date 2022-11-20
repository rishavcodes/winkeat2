import React from 'react'
import "../Paymentsidebar/Paymentsidebar.css"
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

const PaymentSidebar = () => {
  return (
    <>
        <div className="payment-sidebar">
            <h3>Choose Payment Option</h3>
            <ul>
              <li><AccountBalanceWalletIcon/> Wallet</li>
              <li><CreditCardIcon/> Credit Card</li>
              <li><CreditCardIcon/> Debit Card</li>
              <li><QrCodeScannerIcon/> UPI Payment</li>
            </ul>
          </div>
    </>
  )
}

export default PaymentSidebar