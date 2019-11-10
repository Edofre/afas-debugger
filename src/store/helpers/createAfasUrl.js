export default function createAfasUrl(token, endpoint, sortations = [], filters = []) {
  const environment = token.environment === 'production' ? '' : token.environment

  let url = `https://${token.id}.rest${environment}.afas.online/profitrestservices/${endpoint}`

  // Check if we have a sortation of some sort
  if (sortations.length > 0) {
    let sortationString = Array.prototype.map.call(sortations, s => (s.direction === 'asc' ? '' : '-') + s.id).toString()
    url = `https://${token.id}.rest${environment}.afas.online/profitrestservices/${endpoint}&orderbyfieldids=${sortationString}`
  }

  // Add the filters if provided
  if (filters.length > 0) {
    let filterFieldIds = []
    let filterValues = []
    let operatorTypes = []

    filters.forEach(function(filter) {
      // Make sure we don't add any empty rows in our filter
      if (filter.field && filter.operator && filter.value) {
        filterFieldIds.push(filter.field)
        filterValues.push(filter.value)
        operatorTypes.push(filter.operator)
      }
    })

    if (filterFieldIds.length > 0) {
      url += `&filterfieldids=${filterFieldIds.join()}`
      url += `&filtervalues=${filterValues.join()}`
      url += `&operatortypes=${operatorTypes.join()}`
    }

    // &filterfieldids=id,id
    // &filtervalues=BG,BA
    // &operatortypes=1,1

    // , MEANS OR
    // filterfieldids=id%2Cid&filtervalues=BA%2CBG&operatortypes=1%2C1
    // ; MEANS AND
    // filterfieldids=id%3Bid&filtervalues=BA%3BBG&operatortypes=1%3B1
  }

  return url
}
