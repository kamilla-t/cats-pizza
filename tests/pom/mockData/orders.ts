export const oneOrder = {
  orders: [
    {
      id: 'order-2',
      ownerType: 'user',
      ownerId: 'user-3',
      userId: 'user-3',
      guestSessionId: null,
      items: [
        {
          id: 'cat-1',
          name: 'Маргарита',
          basePrice: 3500,
          price: 3500,
          options: {
            furType: 'Средняя',
            activityLevel: 'Игровой',
            extras: [],
          },
          quantity: 1,
        },
      ],
      totalPrice: 3500,
      customer: {
        city: '1',
        street: '1',
        house: '1',
        apartment: '',
        comment: '',
        payment: 'card',
      },
      createdAt: '2026-10-29T01:52:59.189Z',
    },
  ],
};

export const emptyOrders = {
  orders: [],
};
