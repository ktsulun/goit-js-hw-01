(() => {
  const orderPieces = 4;

  const credits = 23580;
  const pricePerDroid = 3000;
  const CANCELED_BY_USER = 'Отменено пользователем!';
  const ACCESS_DENIED = 'Недостаточно средств на счету!';

  let totalPrice = orderPieces * pricePerDroid; // Write code on this line
  let balanceCredit = credits - totalPrice; /// Write code on this line
  let message;

  // Write code under this line
  if (orderPieces === null) {
    message = CANCELED_BY_USER;
  } else if (orderPieces >= 0 && balanceCredit >= 0) {
    message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
  } else {
    message = ACCESS_DENIED;
  }

  console.log(message);
})();
