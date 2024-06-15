export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
      bl_lat: '33.664499',
      bl_lng: '11.554444',
      tr_lat: '66.773344',
      tr_lng: '45.115588',
      limit: '300',
    },
    headers: {
      'X-RapidAPI-Key': 'd5b2e52a99msh734f28cdbf7303ep1442d5jsn7f81504b2f0f',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com',
    },
  };
  
  export const headers = {
    'x-rapidapi-key': '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
    'x-rapidapi-host': 'flight-radar1.p.rapidapi.com',
    'Content-Type': 'application/json',
  };