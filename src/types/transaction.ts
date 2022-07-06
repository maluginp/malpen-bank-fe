export enum TransactionStatus {
  SUCCEED = 0, CANCELLED = 1, PROCESSING = 2
}

export function transactionStatusToText(status: TransactionStatus): string {
  switch (status) {
    case TransactionStatus.SUCCEED: return "Выполнено"
    case TransactionStatus.CANCELLED: return "Отменено"
    case TransactionStatus.PROCESSING: return "Обрабатывается"
  }
}

export interface ITransaction {
  id: number,
  amount: number,
  senderAddress: string,
  receiverAddress?: string,
  status: TransactionStatus,
  createdAt: string
}
