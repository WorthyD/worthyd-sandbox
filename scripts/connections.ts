const request = require('request');
const f = require('date-fns');
const fs = require('fs');

console.log('starting');
const today = new Date();
const year = today.getFullYear();
const monthNumber = f.format(today, 'MM');
const dayNumber = f.format(today, 'dd');

const url = `https://www.nytimes.com/svc/connections/v2/${year}-${monthNumber}-${dayNumber}.json`;

interface category {
  title: string;
  cards: card[];
}
interface card {
  content: string;
  position: number;
}

function getWordsAndSave(categories: category[]) {
  let words: card[] = [];
  categories.forEach((x: category) => {
    x.cards.forEach((y: card) => {
    //  console.log(y);
      words.push(y);
    });
  });

  console.log(words.sort((a, b) => a.position - b.position));
  fs.writeFile(
    './apps/worthyd-connections-scorer/src/assets/words.json',
    JSON.stringify({ allwords: words.sort((a, b) => a.position - b.position) }),
    (err: any) => {
      if (err) throw err;
    }
  );
}

request.get(url, function (error: any, response: any, body: any) {
  // console.error('error:', error);
  // console.log('statusCode:', response && response.statusCode);
  // console.log('body:', body.status);
  getWordsAndSave(JSON.parse(body).categories);
});

//https://www.nytimes.com/svc/connections/v2/2024-10-29.json
