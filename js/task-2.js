(() => {
  const invoice = 100;
  const stock = 100;

  const message =
    invoice > stock
      ? 'На складе недостаточно товаров!'
      : 'Заказ оформлен, с вами свяжется менеджер';

  console.log(message);
})();
