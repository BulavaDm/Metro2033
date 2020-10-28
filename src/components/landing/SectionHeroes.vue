<template>
    <section id="heroes" class="section section-heroes slider">
        <div class="slider__container">
            <div class="slider__track" ref="track">
                <div v-for="hero in heroes" :key="hero.id" class="slider__item">
                    <hero-card
                        :image="hero.image"
                        :name="hero.name"
                        :ability="hero.ability"
                        :steps="hero.step"
                        :strength="hero.strength"
                        :blusters="hero.blusters"
                    />
                </div>
            </div>
        </div>
        <div class="slider__control">
            <transition name="fade">
                <button type="button" v-if="count !== 0" @click="moveTrack('prev')">
                    <svg width="74" height="96" viewBox="0 0 74 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 21.5L26.7485 45.1986C25.2222 46.7543 25.2222 49.2457 26.7485 50.8014L50 74.5" stroke="#FFFAF0" stroke-width="4"></path>
                    </svg>
                </button>
            </transition>
            <transition name="fade">
                <button type="button" v-if="count < 3" class="nextBtn" @click="moveTrack('next')">
                    <svg width="74" height="96" viewBox="0 0 74 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 21.5L26.7485 45.1986C25.2222 46.7543 25.2222 49.2457 26.7485 50.8014L50 74.5" stroke="#FFFAF0" stroke-width="4"></path>
                    </svg>
                </button>
            </transition>
        </div>
    </section>
</template>

<script>
import HeroCard from '../cards/HeroCard.vue'

export default {
    components: {
        'hero-card': HeroCard
    },
    data() {
        return {
            position: 0,
            count: 0,
            heroes: [
                {
                    id: 1,
                    image: 'Anna',
                    name: 'АННА',
                    ability: 'АННА НЕ ТРАТИТ ЕДИНИЦ СКОРОСТИ НА ПЕРЕХОДЫ МЕЖДУ СТАНЦИЯМИ (ТРАТИТ ТОЛЬКО НА ПЕРЕГОНЫ)',
                    step: 3,
                    strength: 3,
                    blusters: {
                        radiation: 0,
                        biology: 0,
                        skull: 0
                    }
                },
                {
                    id: 2,
                    image: 'Artem',
                    name: 'АРТЕМ',
                    ability: 'КОГДА АРТЕМ АТАКУЕТ НЕЙТРАЛЬНУЮ СТАНЦИЮ, МОЖЕТЕ ПОСМОТРЕТЬ ДВЕ ВЕРХНИЕ КАРТЫ КОЛОДЫ УГРОЗ И ВЫБРАТЬ ДЛЯ БОЯ ЛЮБУЮ ИЗ НИХ',
                    step: 3,
                    strength: 2,
                    blusters: {
                        radiation: 0,
                        biology: 0,
                        skull: 0
                    }
                },
                {
                    id: 3,
                    image: 'Melnik',
                    name: 'МЕЛЬНИК',
                    ability: 'МЕЛЬНИК МОЖЕТ НОСИТЬ ДОПОЛНИТЕЛЬНУЮ КАРТУ СНАРЯЖЕНИЯ',
                    step: 3,
                    strength: 2,
                    blusters: {
                        radiation: 0,
                        biology: 0,
                        skull: 0
                    }
                },
                {
                    id: 4,
                    image: 'Hanter',
                    name: 'ХАНТЕР',
                    ability: 'ЕСЛИ ХАНТЕР РАНЕН, ОН ПЕРЕМЕЩАЕТСЯ НА СТАНЦИЮ СВОЕЙ ФРАКЦИИ, НЕ ТРАТЯ СЛЕДУЮЩИЙ ХОД НА ЛЕЧЕНИЕ',
                    step: 3,
                    strength: 3,
                    blusters: {
                        radiation: 0,
                        biology: 0,
                        skull: 0
                    }
                },
                {
                    id: 5,
                    image: 'Sasha',
                    name: 'САША',
                    ability: 'ЕСЛИ САША НАХОДИТСЯ НА СТАНЦИ ГАНЗЫ ИЛИ СВОЕЙ ФРАКЦИИ, ВМЕСТО ДЕЙСТВИЯ ОНА МОЖЕТ ПРОИЗВЕСТИ РЕСУРС ПО ВАШЕМУ ВЫБОРУ',
                    step: 3,
                    strength: 2,
                    blusters: {
                        radiation: 0,
                        biology: 0,
                        skull: 0
                    }
                },
                
                {
                    id: 6,
                    image: 'Han',
                    name: 'ХАН',
                    ability: 'ХАН МОЖЕТ ПОКУПАТЬ СНАРЯЖЕНИЕ, ПОКУПАТЬ ЗАДАНИЕ И ОБМЕНИВАТЬ РЕСУРСЫ НА СТАНЦИИ СВОЕЙ ФРАКЦИИ, КАК ЕСЛИ БЫ ЭТО БЫЛО НА СТАНЦИИ ГАНЗЫ',
                    step: 3,
                    strength: 3,
                    blusters: {
                        radiation: 0,
                        biology: 0,
                        skull: 0
                    }
                }
            ]
        }
    },
    created() {
        window.addEventListener('resize', this.returnToStartPosition);
    },
    destroyed() {
        window.removeEventListener('resize', this.returnToStartPosition);
    },
    methods: {
        moveTrack(direction) {
            const itemWidth = this.$refs.track.clientWidth / 3;

            if (direction === 'next' && this.count < 3) {
                this.position += itemWidth;
                this.count += 1;
                this.$refs.track.style.transform = `translateX(${-this.position}px)`;
            } else if (direction === 'prev' && this.count > 0) {
                this.position -= itemWidth;
                this.count -= 1;
                this.$refs.track.style.transform = `translateX(${-this.position}px)`;
            }    
        },
        returnToStartPosition() {
            this.position = 0;
            this.count = 0;
            this.$refs.track.style.transform = 'translateX(0px)';
        }
    }
}
</script>

<style scoped lang="scss">
    .section-heroes {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .slider {
        &__container {
            max-width: 60vw;
            overflow: hidden;
            position: relative;
        }

        &__track {
            display: flex;
            transition: transform 1.5s ease;
        }

        &__item {
            min-width: 20vw;
            padding: 0 20px 0;
            /* Blue backround after faster double click */
            user-select: none;
        }

        &__control {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            width: 70vw;
            pointer-events: none;

            button {
                pointer-events: auto;
            }

            button path {
                transition: stroke-width 1s;
            }

            button:hover {
                cursor: pointer;
            }

            button:hover path {
                stroke-width: 6;
                stroke: #FFFFFF;
            }

            .nextBtn {
                margin-left: auto;

                svg {
                    transform: rotate(180deg);
                }
            }

            .fade-enter-active, .fade-leave-active {
                transition: opacity .5s;
            }

            .fade-enter, .fade-leave-to {
                opacity: 0;
            }
        }
    }
</style>