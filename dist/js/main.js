let links = document.getElementsByClassName('nav-link');
Array.from(links).forEach((link) => {
  link.addEventListener(
    'click',
    () => {
      Array.from(links).forEach((l) => {
        l.classList.remove('active');
      });
      link.classList.add('active');
    },
    false,
  );
});

function show_mail() {
  document.getElementById('send-email-box').classList.remove('d-none');
  document.getElementById('send-email-btn').classList.add('d-none');
}

function hide_mail() {
  document.getElementById('send-email-box').classList.add('d-none');
  document.getElementById('send-email-btn').classList.remove('d-none');
}

function updateSize() {
  let s_width = window.innerWidth;
  //define max options by screen size
  if (s_width > 960) {
    q = 3;
  } else if (s_width > 686) {
    q = 2;
  } else {
    q = 1;
  }
  fill_carousel(q);
}
// Refactor when possible
function fill_carousel(q) {
  let carousel = document.getElementById('carousel-options');
  carousel.innerHTML = '';
  let indicator_list = document.getElementById('carousel-indicators');
  indicator_list.innerHTML = '';
  document.getElementById('loading-gif').classList.remove('d-none');
  let i = 0;
  let q_carousel_item = 0;
  if (projects_dict.length > q) {
    q_carousel_item = Math.ceil(projects_dict.length / q);
  } else {
    q_carousel_item = q = projects_dict.length;
  }
  for (let j = 0; j < q_carousel_item; j++) {
    let indicator = document.createElement('li');
    indicator.setAttribute('data-target', '#carouselExampleIndicators');
    indicator.setAttribute('ddata-slide-to', j);

    let carousel_item = document.createElement('div');
    carousel_item.classList.add('carousel-item');
    if (j == 0) {
      carousel_item.classList.add('active');
      indicator.classList.add('active');
    }

    let div = document.createElement('div');
    div.classList.add('d-flex');
    indicator_list.appendChild(indicator);

    for (let k = 0; k < q; k++) {
      if (projects_dict[i] == undefined) {
        projects_dict[i] = {
          name: '',
          description: '',
          image: 'dist/images/none.png',
          link: '#',
        };
      }
      let carousel_link = document.createElement('a');
      carousel_link.classList.add('carousel-link', 'mb-4');
      if (k != q - 1) {
        carousel_link.classList.add('mr-2');
      }
      carousel_link.href = 'projetos/' + projects_dict[i].link;

      let img = document.createElement('img');
      img.classList.add('d-block', 'w-100');
      img.src = projects_dict[i].image + '?auto=yes&bg=777&fg=555&text=' + i + ' Link';
      img.alt = '';
      carousel_link.appendChild(img);

      let caption = document.createElement('div');
      caption.classList.add('carousel-caption', 'd-md-block');

      let name = document.createElement('h5');
      name.innerHTML = projects_dict[i].name;
      let description = document.createElement('p');
      description.innerHTML = projects_dict[i].description;

      caption.appendChild(name);
      caption.appendChild(description);

      carousel_link.appendChild(caption);

      div.appendChild(carousel_link);
      i++;
    }

    carousel_item.appendChild(div);
    carousel.appendChild(carousel_item);
  }
  document.getElementById('loading-gif').classList.add('d-none');
}

updateSize();
window.onresize = updateSize;
// window.addEventListener('resize', updateSize);
