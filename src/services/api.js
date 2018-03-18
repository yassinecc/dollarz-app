export const doPayment = (stripeTokenId, amount) => {
  return fetch('http://localhost:5000/api/doPayment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      tokenId: stripeTokenId,
      amount: amount,
    }),
  }).then(res => {
    if (res.status === 200) {
      return res;
    } else {
      return Promise.reject(Error('error', { res }));
    }
  });
};

export const createUser = (firstName, lastName) => {
  console.log(firstName, lastName)
  return true
}
