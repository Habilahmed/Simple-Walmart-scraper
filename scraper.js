import fetch from "node-fetch";



const url = 'YOURWALMARTAPI';


const headers = {
  'accept': 'application/json',
  'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8,haw;q=0.7,la;q=0.6,ru;q=0.5',
  'cookie': 'YOURCOOKIE',
  'downlink': '10',
  'dpr': '2',
  'priority': 'u=1, i',
  'referer': 'YOURREFERER', 
  'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
  'sec-ch-ua-mobile': '?1',
  'sec-ch-ua-platform': '"Android"',
  'sec-fetch-dest': 'empty',
  'sec-fetch-mode': 'cors',
  'sec-fetch-site': 'same-origin',
  'user-agent': 'YOURUSERAGENT',
  'x-apollo-operation-name': 'ItemById',
  'x-o-platform': 'rweb',
  'x-o-platform-version': 'main-1.30.0-d8c875',
  'x-o-segment': 'oaoh'
};

fetch(url, { headers })
  .then(response => response.json())
  .then(responseData => {
    // console.log('Raw Response:', responseData); 

    const priceObject = responseData?.data?.product?.priceInfo?.currentPrice;

    if (priceObject) {
      const priceAmount = priceObject?.price;
      const priceString = priceObject?.priceString;
      console.log(`Price: ${priceString} (${priceAmount})`);
    } else {
      console.error('Price not found in the response.');
    }
  })
  .catch(error => console.error('Error:', error));