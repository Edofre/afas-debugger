export default function createAfasUrl(token, endpoint, filters = []) {
  const environment = token.environment === 'production' ? '' : token.environment

  if (filters.length > 0) {
    let filter = Array.prototype.map.call(filters, s => (s.direction === 'asc' ? '' : '-') + s.id).toString()
    return `https://${token.id}.rest${environment}.afas.online/profitrestservices/${endpoint}?orderbyfieldids=${filter}`
  }

  return `https://${token.id}.rest${environment}.afas.online/profitrestservices/${endpoint}`
}
