export default {
    // Select the attributes you want to search in
    searchableAttributes: [
      'country', 'city', 'name', 'airport_id'
    ],
    // Define business metrics for ranking and sorting
    customRanking: [
      'desc(nb_airline_liaisons)'
    ],
    // Set up some attributes to filter results on
    attributesForFaceting: ['city, country']
  }