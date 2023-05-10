export interface loginPayloadAPI {
  email: string;
  password: string;
}
export interface TransactionPayloadAPI {
  ProcessingCode: number;
  SystemTraceNr: number;
  FunctionCode: number;
  CardNo: string;
  CardHolder: string;
  AmountTrxn: number;
  CurrencyCode: number;
}
