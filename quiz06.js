// 6. 장바구니 뒤바뀜 문제
// function applyCoupon(cart, coupon) {
//     cart.items.forEach((item) => {
//         item.price -= coupon.discount;
//     });
// }

// const userACart = {
//     items: [
//         { name: "키보드", price: 30000 },
//         { name: "마우스", price: 20000 },
//     ],
// };

// const userBCart = userACart;
// const coupon = { discount: 5000 };

// applyCoupon(userBCart, coupon);

// 답
// 1. userACart.items의 결과: items: [
//     { name: "키보드", price: 25000 },
//     { name: "마우스", price: 15000 },
//   ], userBCart.items의 결과: items: [
//     { name: "키보드", price: 25000 },
//     { name: "마우스", price: 15000 },
//   ],
// 둘다 동일하게 모든 프로퍼티의 value가 -5000만큼 변화하였다.

// 2. const userBCart = userACart; 에서 객체를 복사하게 되어, 같은 참조를 바라보게 된다.
// 참조 대상이 같으므로, 참조하는 주소가 변화하여도 함께 동작하여 둘이 의존적으로 동작한다.

// 3. 아래와 같이 깊은 복사가 일어나도록 수정한다.
function applyCoupon(cart, coupon) {
    cart.items.forEach((item) => {
        item.price -= coupon.discount;
    });
}

const userACart = {
    items: [
        { name: "키보드", price: 30000 },
        { name: "마우스", price: 20000 },
    ],
};

const userBCart = JSON.parse(JSON.stringify(userACart));
const coupon = { discount: 5000 };

applyCoupon(userBCart, coupon);