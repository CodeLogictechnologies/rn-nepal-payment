export interface EsewaFormInputs {
  amt: number
  taxAmt: number
  totalAmt: number
  psc: number
  pdc: number
  pid: string
  successURL: string
  failureURL: string
  env: "EPAYTEST" | string
  testMode: boolean
  signature: string
}

export interface KhaltiSdkProps {
  successURL: string
  failureURL: string
  onPaymentComplete: (data: any) => void
  uri: string
  isVisible: boolean
}

export interface EsewaSdkProps {
  amt: number
  psc: number
  pdc: number
  pid: string
  env: string
  taxAmt: number
  successURL: string
  failureURL: string
  totalAmt: number
  testMode: boolean
  signature: string
  onPaymentComplete: (data: any) => void
  isVisible: boolean
}

export enum EsewaStatus {
  COMPLETE = "COMPLETE",
  PENDING = "PENDING",
  FULL_REFUND = "FULL_REFUND",
  PARTIAL_REFUND = "PARTIAL_REFUND",
  AMBIGIOUS = "AMBIGIOUS",
  NOT_FOUND = "NOT_FOUND",
  CANCELED = "CANCELED",
  NO_SERVICE = "Service is currently unavailable"
}

export interface EsewaReponseData {
  product_code: string
  signature: string
  signed_field_names: string
  status: EsewaStatus
  total_amount: string
  transaction_code: string
  transaction_uuid: string
  success_url?: string
  code?: string
  error_message?: string
}