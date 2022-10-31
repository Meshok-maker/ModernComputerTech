import { CartItemType } from "../../Types/Types";

const Products = [
    {
        id: 0,
        category: "estate",
        description: "Стандатный гараж на одно место, не слишком теплый, не слишком вместительный, но по соотношению цена-качество не имеет себе равных",
        image: "https://delovoibiysk.ru/photo/c5644f1e1a9a50387c0e3dd8157cbaf1.jpg",
        price: 50000,
        title: "Железный гараж",
        amount: 500
    },
    {
        id: 1,
        category: "estate",
        description: "Одноместный кирпичный гараж с подогревом, отличная цена, из больших плюсов можно отметить то, что высота потолков составляет 3 метра",
        image: "https://a.d-cd.net/16d7839s-1920.jpg",
        price: 120000,
        title: "Кирпичный гараж",
        amount: 500
    },
    {
        id: 2,
        category: "estate",
        description: "Двухместный гараж с подогревом, простой, но в тоже время надежный гараж для семьи с несколькими авто",
        image: "https://pro-dachnikov.com/uploads/posts/2021-10/1634419942_28-p-tsvet-garazha-snaruzhi-foto-28.jpg",
        price: 170000,
        title: "Гараж для двух авто",
        amount: 500
    },
    {
        id: 3,
        category: "estate",
        description: "Одноместный гараж из профнастила с подогревом, не слишком большая высота потолков, но все же достаточно места для авто и инструментов",
        image: "https://mirstrojka.ru/wp-content/uploads/2018/03/Garazh-svoimi-rukami-43.jpg",
        price: 100000,
        title: "Профнастиловый гараж",
        amount: 500
    },
    {
        id: 4,
        category: "estate",
        description: "Гараж в американском стиле. В одном из таких Стив Джобс начинал свою карьеру. Из плюсов можно выделить вместительность и подогрев гаража непосредственно от дома",
        image: "https://pro-dachnikov.com/uploads/posts/2021-10/1634414360_4-p-amerikanskii-garazh-foto-5.jpg",
        price: 250000,
        title: "Американский гараж",
        amount: 500
    },
    {
        id: 5,
        category: "estate",
        description: "Гараж в премиальном стиле, здесь есть все, что необходимо для комфортного пребывания авто и его владельца. Отопление, место для инструментов, а также подъемник",
        image: "https://pro-dachnikov.com/uploads/posts/2021-10/1634243056_78-pro-dachnikov-com-p-bolshoi-garazh-foto-83.jpg",
        price: 400000,
        title: "Премиум гараж",
        amount: 500
    }
];

export const AllProducts = async (): Promise<CartItemType[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(Products), 1000);
    });
}
