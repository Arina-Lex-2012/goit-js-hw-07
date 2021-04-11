const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];


const galleryEl = document.querySelector('ul');

const gallery = images.map(option => {
    const listEl = document.createElement('li');
    const imageEl = document.createElement('img');
    imageEl.src = option.url;
    imageEl.alt = option.alt;
    imageEl.style.height = '150px';
    imageEl.style.boxShadow = '10px 10px 5px grey';
    listEl.style.listStyleType = 'none';
    listEl.style.padding = '20px';
    listEl.appendChild(imageEl);

    return listEl;
});

galleryEl.append(...gallery);
galleryEl.style.display = 'flex';


// for (let i=0; i< images.length; i+=1){
//     const option = images[i];
//     const listEl = document.createElement('li');
//     const imageEl = document.createElement('img');
//     imageEl.src = option.url;
//     imageEl.alt = option.alt;
//     imageEl.style.width = '200px';
//     listEl.appendChild(imageEl);

//     gallery.push(listEl);
// };




