export interface IWallet {
    id: number
    name: string
    address: string
}
export interface IBalancedWallet extends IWallet {
    balance: number
}