export default function createAfasUrl(token, endpoint) {
  const environment = token.environment === 'production' ? '' : token.environment
  return `https://${token.id}.rest${environment}.afas.online/profitrestservices/${endpoint}`
}
