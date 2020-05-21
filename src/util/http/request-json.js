export default async (url, params) => {
  const response = await fetch(url, params)
  const responseBody = await response.text()
  if (!response.ok) {
    throw new Error(`Server returned an error: ${responseBody}`)
  }
  return responseBody ? JSON.parse(responseBody) : undefined
}
