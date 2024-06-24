export async function getCardList() {
  const response = await fetch(
    'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  )
  const data = await response.json()
  return data
}

export async function getCardListRes(id: number) {
  const response = await fetch(
    `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`
  )
  const data = await response.json()
  return data
}
