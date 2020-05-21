import requestJson from './request-json'

export default async (url, body) => {
  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: body ? JSON.stringify(body) : undefined
  }
  return requestJson(url, params)
}
