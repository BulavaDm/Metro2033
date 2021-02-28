<template>
    <section id="fractions" class="section section-fractions">
        <div class="section-fractions__container">
            <div class="section-fractions__image">
                <img src="../../assets/images/fractions/1905_F.png" alt="1905">
                <img src="../../assets/images/fractions/1905_B.png" alt="1905">
            </div>
            <div class="section-fractions__text">
                <p>
                    Приблизительно в 2020-2023 годах, комендант станции Илья Зотов создал Конфедерацию 1905 года, объединившись с соседними «Баррикадной», «Беговой», «Полежаевской» и «Октябрьским полем». 
                </p>
                <p>
                    Улица 1905 года таким образом стала столицей и главной торговой станцией сформировавшегося содружества.
                </p>
                <p>
                    Режим в конфедерации авторитарный, хотя население придерживается больше коллективистских идей, свойственных коммунистам Красной Линии.
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    .section-fractions {
        display: flex;
        justify-content: center;
        align-items: center;

        &__container {
            display: flex;
            align-items: center;
            max-width: 65vw;
        }

        &__image {
            width: 50%;

            img {
                max-width: 100%;
                object-fit: cover;
            }
        }

        &__text {
            width: 50%;
            padding-left: 40px;
            color: #FFF;
            font-size: 1.5vw;

            p {
                margin-top: 16px;
            }

            p:first-child {
                margin-top: 0px;
            }
        }
    }
</style>