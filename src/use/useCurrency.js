//currency
export function useCurrency(amount,country_code='en-US' ,currency="USD"){
  // format : "+ $ 4,999.99" | "- $ 444.00"
  if (typeof amount !== "number") return

  const currency_format = new Intl.NumberFormat(country_code, {style:"currency",currency:currency}).format(Math.abs(amount),)
  
  return amount>=0? `+ ${currency_format}`: `- ${currency_format}`

}