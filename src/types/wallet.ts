export interface IWallet {
    id: number
    name: string
    address: string
    isDefault: boolean
}

export interface IUpdateWallet {
    id: number
    name: string
}

export interface IBalancedWallet extends IWallet {
    balance: number
}

export interface IFoundUserWallet {
    nickname: string
    address: string
}