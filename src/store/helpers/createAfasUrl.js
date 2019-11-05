export default function createAfasUrl(token, endpoint, sortations = [], filters = []) {
  const environment = token.environment === 'production' ? '' : token.environment

  if(filters.length > 0) {
    // Check if valid, string will look like this:
    
    // &filterfieldids=id,id
    // &filtervalues=BG,BA
    // &operatortypes=1,1
  }


  if (sortations.length > 0) {
    let sortationString = Array.prototype.map.call(sortations, s => (s.direction === 'asc' ? '' : '-') + s.id).toString()
    return `https://${token.id}.rest${environment}.afas.online/profitrestservices/${endpoint}&orderbyfieldids=${sortationString}`
  }

  return `https://${token.id}.rest${environment}.afas.online/profitrestservices/${endpoint}`
}

// https://87134.rest.afas.online/ProfitRestServices/connectors/AFASPocket_Activities?orderbyfieldids=-description
//
