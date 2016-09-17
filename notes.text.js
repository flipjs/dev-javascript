function updateDomainsState(type, payload) {
  return {
    type,
    payload
  }
}

function createDomainSucceeded

httpGetDomains()
httpGetDomainsRequested()
httpGetDomainsSucceededWithData(data)
httpGetDomainsFailedWithError(error)

httpGetDomainById(id)
httpGetDomainRequested()
httpGetDomainSucceededWithData(data)
httpGetDomainFailedWithError(error)

httpSaveDomainWithData(data)
httpSaveDomainRequested()
httpSaveDomainSucceeded()
httpSaveDomainFailedWithError1()

GET::(/api/domains) returns all data with status 200
GET::(/api/domains/123) returns record 123 with status 200
POST::(/api/domains) returns status 201 only
PUT::(/api/domains/123) returns status 200 only
DELETE::(/api/domains/123) returns status 200 only
