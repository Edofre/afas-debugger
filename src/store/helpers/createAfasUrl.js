export default function createAfasUrl(token, endpoint, sortingFields = [], filters = []) {
  const environment = token.environment === 'production' ? '' : token.environment

  if (filters.length > 0) {
    // Check if valid, string will look like this:
    console.log(filters)

    // &filterfieldids=id,id
    // &filtervalues=BG,BA
    // &operatortypes=1,1
  }

  if (sortingFields.length > 0) {
    let sortingString = Array.prototype.map.call(sortingFields, s => (s.direction === 'asc' ? '' : '-') + s.id).toString()
    return `https://${token.id}.rest${environment}.afas.online/profitrestservices/${endpoint}&orderbyfieldids=${sortingString}`
  }

  return `https://${token.id}.rest${environment}.afas.online/profitrestservices/${endpoint}`
}

// https://87134.rest.afas.online/ProfitRestServices/connectors/AFASPocket_Activities?orderbyfieldids=-description
// https://87134.rest.afas.online/ProfitRestServices/connectors/AFASPocket_Activities?filterfieldids=id%3Bid&filtervalues=BA%3BBG&operatortypes=1%3B1
// https://87134.rest.afas.online/ProfitRestServices/connectors/AFASPocket_Activities?filterfieldids=id%2Cid%3Bid&filtervalues=BA%2Ctest%3BBG&operatortypes=1%2C1%3B1
