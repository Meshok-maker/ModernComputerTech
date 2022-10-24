import { Quest } from "../../Types/Types";

export const AllQuest: Quest[] = [
    {
        id: 0,
        title: "Столица Австралии",
        variants: ["Канберра", "Сидней", "Мачупикчу", "Кингтаун"],
        correctVariant: 0
    },
    {
        id: 1,
        title: "Год основания Санкт-Петербурга",
        variants: ["1147", "1703", "1991", "1053"],
        correctVariant: 1
    },
    {
        id: 2,
        title: "В каком городе находится Пизанская башня",
        variants: ["Рим", "Неаполь", "Марсель", "Пиза"],
        correctVariant: 3
    },
    {
        id: 3,
        title: "Столицей какого государства является город Лиссабон",
        variants: ["Испания", "Италия", "Португалия", "Испания"],
        correctVariant: 2
    },
    {
        id: 4,
        title: "Самая большая страна в Южной Америке - это",
        variants: ["Бразилия", "Аргентина", "Чили", "Перу"],
        correctVariant: 0
    },
]