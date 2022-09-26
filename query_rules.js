// If one word of the query matches a city or a country,
// we disable IP-based geolocation
export default [
    {
      objectID: 'country',
      condition: {
        pattern: '{facet:country}',
        anchoring: 'contains'
      },
      consequence: {
        params: {
          aroundLatLngViaIP: false
        }
      }
    },
    {
      objectID: 'city',
      condition: {
        pattern: '{facet:city}',
        anchoring: 'contains'
      },
      consequence: {
        params: {
          aroundLatLngViaIP: false
        }
      }
    }
  ]