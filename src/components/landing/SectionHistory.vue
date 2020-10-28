<template>
    <section id="history" class="section section-history">
        <div class="section-history__text">
            <p>
                Судный день наступил 6 июля 2013 года. На крупнейшие города мира, преимущественно на территории России и США, начали сыпаться ядерные боеголовки
            </p>
            <p>В результате обмена ядерными ударами все крупные города были стёрты с лица земли. 
                Благодаря оперативным действиям служб гражданской обороны московский метрополитен удалось оградить от радиации: 
                почти на всех станциях были закрыты гермозатворы, а в системах вентиляции и водоснабжения активированы противорадиационные фильтры. 
            </p>
            <p>Выжили только те, кому повезло оказаться в метро. Люди вынуждены жить в тоннелях и на станциях, освещенных тусклыми аварийными лампами. 
                Выжившие научились выращивать грибы и даже овощи, а на некоторых станциях разводят свиней и других животных.
            </p>
            <p>
                С течением времени, станции объединились в группы с разными взглядами на религию и политику и, естественно, начали вести непрекращающиеся войны...
            </p>
        </div>
        <div class="section-history__image">
            <img src="../../assets/images/Moscow.jpg" alt="Moscow">
        </div>
    </section>
</template>

<style scoped lang="scss">
    .section-history {
        display: flex;
        background: #110D0C;
        z-index: 3;
        position: relative;

        &__text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 70%;
            background: #110D0C;
            border-top-right-radius: 20% 75%;
            border-bottom-right-radius: 20% 75%;
            padding-top: 96px;

            p {
                text-indent: 48px;
                color: #FFFFFF;
                font-size: 1.8vw;
                max-width: 80%;
                margin-top: 16px;
            }
        }

        &__image {
            width: 40%;
            height: 100%;
            z-index: -1;
            position: absolute;
            right: 0px;
            bottom: 0px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                filter: sepia(60%);
            }
        }
    }
</style>