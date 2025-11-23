//крестик
document.querySelector('.header__discount-cross').addEventListener('click', () => {
  document.querySelector('.header__discount').style.display = 'none';
});

//слайдер
document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('.feedback__list');
  const items = document.querySelectorAll('.feedback__comment');
  const itemWidth = items[0]?.offsetWidth || 0;
  let index = 0;

  function scrollToIndex() {
    list.scrollTo({
      left: index * itemWidth,
      behavior: 'smooth'
    });
  }

  function autoScroll() {
    index++;
    if (index > items.length - 3) {
      index = 0;
    }
    scrollToIndex();
  }

  const btnLeft = document.querySelector('.feedback__nav-left');
  const btnRight = document.querySelector('.feedback__nav-right');

  btnRight?.addEventListener('click', () => {
    index++;
    if (index > items.length - 3) {
      index = 0;
    }
    scrollToIndex();
  });

  btnLeft?.addEventListener('click', () => {
    index--;
    if (index < 0) {
      index = items.length - 3;
    }
    scrollToIndex();
  });

  setInterval(autoScroll, 3000);
});

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.product__visual');
  const main = document.getElementById('product__pic--displayed');

  if (!container || !main) {
    console.error('Нет .product__visual или #product__pic--displayed в DOM');
    return;
  }

//
  container.addEventListener('click', (e) => {
    const thumb = e.target.closest('[data-full].product__pic-thumb');
    if (!thumb) return;

    const url = thumb.dataset.full;
    if (!url) return;


    container.querySelectorAll('.product__pic-thumb').forEach(t => t.classList.remove('is-active'));
    thumb.classList.add('is-active');

  
    const pre = new Image();
    pre.onload = () => {
      main.classList.add('is-fading');
      setTimeout(() => {
        main.src = url;
        main.classList.remove('is-fading');
      }, 300);
    };
    pre.onerror = () => console.error('Не удалось загрузить', url);
    pre.src = url;
  });
});

/////
document.addEventListener('DOMContentLoaded', () => {
  const minusBtn = document.querySelector('.product__minus');
  const plusBtn = document.querySelector('.product__plus');
  const quantityDisplay = document.querySelector('.product__quant');

  let quantity = parseInt(quantityDisplay.textContent);

  plusBtn.addEventListener('click', () => {
    quantity++;
    quantityDisplay.textContent = quantity;
  });

  minusBtn.addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      quantityDisplay.textContent = quantity;
    }
  });
});

