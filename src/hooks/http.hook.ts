import { useCallback, useState } from 'react'

export const useHttp = (): any => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = useCallback(async (
    url, method = 'GET', body = null, headers = {},
  ) => {
    setLoading(true)
    try {
      if (body) {
        // eslint-disable-next-line no-param-reassign
        body = JSON.stringify(body)
        // eslint-disable-next-line no-param-reassign
        headers['content-type'] = 'application/json'
      }
      const KEY = '4276bdd223155b7e5bdf58f8ea7014c9'
      const response = await fetch(
        `${url}&appid=${KEY}`,
        { method, body, headers },
      )
      const data = await response.json()
      if (!response.ok) {
        setError(data.message)
        console.log('Что то пошло не так');
      }
      setLoading(false)
      return data
    } catch (e:any) {
      setLoading(false)
      setError(e.message)
      throw e;
    }
  }, [])
  const clearError = useCallback(() => setError(null), [])
  return {
    loading, error, request, clearError,
  }
}
