export interface EsewaFormInputs {
    amt: number;
    taxAmt: number;
    totalAmt: number;
    psc: number;
    pdc: number;
    pid: string;
    successURL: string;
    failureURL: string;
    env: "EPAYTEST" | string;
    testMode: boolean;
    signature: string;
}
export interface KhaltiSdkProps {
    successURL: string;
    failureURL: string;
    onPaymentComplete: (data: any) => void;
    uri: string;
    isVisible: boolean;
}
export interface EsewaSdkProps {
    amt: number;
    psc: number;
    pdc: number;
    pid: string;
    env: string;
    taxAmt: number;
    successURL: string;
    failureURL: string;
    totalAmt: number;
    testMode: boolean;
    signature: string;
    onPaymentComplete: (data: any) => void;
    isVisible: boolean;
}
//# sourceMappingURL=typings.d.ts.map