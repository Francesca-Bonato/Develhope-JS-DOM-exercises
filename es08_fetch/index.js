const cardTitle = document.querySelector('.card-title');
const cardPic = document.querySelector('.card-pic');

async function fetchCard(url) {
  try {
    const res = await fetch(url);
    const resJson = await res.json();
    console.log(resJson);
    cardTitle.innerText = resJson.name;
    cardPic.setAttribute('src', 'https://ringsdb.com/' + resJson.imagesrc);
    cardPic.setAttribute('alt', 'https://ringsdb.com/' + resJson.text);
  } catch (err) {
    console.error(err)
  }
}

fetchCard('https://ringsdb.com/api/public/card/32007')
