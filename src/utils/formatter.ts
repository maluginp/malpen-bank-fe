import moment from 'moment'

const LAMPORTS_PER_SOL = 1_000_000_000
const fractionDigits = 2

export function formatAmount(amount: number): string {
  const currency = "Lamp"

  if (amount > 0 && amount < 1_000) {
    return amount.toFixed(0)+" "+currency
  } else if (amount >= 1_000 && amount < 1_000_000) {
    return (amount / 1000).toFixed(fractionDigits) + " K"+currency
  } else if (amount >= 1_000_000 && amount < 1_000_000_000) {
    return (amount / 1_000_000).toFixed(fractionDigits) + " M"+currency
  } else {
    return (amount / 1_000_000_000).toFixed(fractionDigits) + " SOL"
  }
}

export function getAmountAsPair(amount: number): { total: string, currency: string } {
  const currency = "Lamp"

  if (amount > 0 && amount < 1_000) {
    return {
      total: amount.toFixed(0), 
      currency: currency
    }
  } else if (amount >= 1_000 && amount < 1_000_000) {
    return {
      total: (amount / 1000).toFixed(fractionDigits),
      currency: "K"+currency
    }
  } else if (amount >= 1_000_000 && amount < 1_000_000_000) {
    return {
      total: (amount / 1_000_000).toFixed(fractionDigits),
      currency: "M"+currency
    }
  } else {
    return {
      total: (amount / 1_000_000_000).toFixed(2),
      currency: "SOL"
    }
  }
}


export function getCurrency(amount: number): string {
  const currency = "Lamp"

  if (amount > 0 && amount < 1_000) {
    return currency
  } else if (amount >= 1_000 && amount < 1_000_000) {
    return "K"+currency
  } else if (amount >= 1_000_000 && amount < 1_000_000_000) {
    return "M"+currency
  } else {
    return "SOL"
  }
}

export function formateDateTime(dateTime: string): string {
  return moment(dateTime).format('DD-MMM-YYYY HH:mm:ss')
}