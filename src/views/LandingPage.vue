<template>
    <div>
        <header class="header">
            <a href="#" class="header__logo" :class="{ active: activeMenu === 0 }" @click="activeMenu = 0">
                <img src="../assets/images/icon.png" alt="Icon">
            </a>
            <nav class="header__menu">
                <a href="#history" :class="{ active: activeMenu === 1 }" @click="activeMenu = 1">
                    <span>И</span><span>с</span><span>т</span><span>о</span><span>р</span><span>и</span><span>я</span>
                </a>
                <a href="#heroes" :class="{ active: activeMenu === 2 }" @click="activeMenu = 2">
                    <span>Г</span><span>е</span><span>р</span><span>о</span><span>и</span>
                </a>
                <a href="#fractions" :class="{ active: activeMenu === 3 }" @click="activeMenu = 3">
                    <span>Ф</span><span>р</span><span>а</span><span>к</span><span>ц</span><span>и</span><span>и</span>
                </a>
                <a href="#rules" :class="{ active: activeMenu === 4 }" @click="activeMenu = 4">
                    <span>П</span><span>р</span><span>а</span><span>в</span><span>и</span><span>л</span><span>а</span>
                </a>
            </nav>

            <div class="header__control">
                <button type="button">Войти</button>
            </div>
        </header>
        <section-start/>
        <section-history/>
        <section-heroes/>
        <!-- <audio autoplay controls>
            <source src="assets/audio/metro_2033.mp3" type="audio/mpeg"/>
        </audio>  -->
    </div>
</template>

<script>
import SectionStart from '../components/landing/SectionStart.vue';
import SectionHistory from '../components/landing/SectionHistory.vue';
import SectionHeroes from '../components/landing/SectionHeroes.vue';

export default {
    components: {
        SectionStart,
        SectionHistory,
        SectionHeroes,
    },
    data() {
        return {
            activeMenu: null,
        }
    },
}
</script>

<style scoped lang="scss">
    .header {
        position: fixed;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 24px;
        font-size: 1.4vw;
        z-index: 10;

        &__logo {
            width: 5%;
            min-width: 5%;

            img {
                width: 100%;
                object-fit: cover;
                border-radius: 50%;
            }
        }

        &__menu {
            display: flex;
            align-items: center;

            a {
                padding: 16px;
            }

            a span {
                font-weight: 100;
                transition: all .3s;
                color: #FFFAF0;
            }

            a span:nth-child(2) {
                transition-delay: 0.05s;
            } 

            a span:nth-child(3) {
                transition-delay: 0.1s;
            } 

            a span:nth-child(4) {
                transition-delay: 0.15s;
            } 

            a span:nth-child(5) {
                transition-delay: 0.2s;
            } 

            a span:nth-child(6) {
                transition-delay: 0.25s;
            } 

            a span:nth-child(7) {
                transition-delay: 0.3s;
            } 

            a:hover span {
                font-weight: 600;
                color: #FFFFFF;
            }

            a:hover span:nth-child(1) {
                transition-delay: 0s;
            } 

            a:hover span:nth-child(2) {
                transition-delay: 0.05s;
            } 

            a:hover span:nth-child(3) {
                transition-delay: 0.1s;
            } 

            a:hover span:nth-child(4) {
                transition-delay: 0.15s;
            } 

            a:hover span:nth-child(5) {
                transition-delay: 0.2s;
            } 

            a:hover span:nth-child(6) {
                transition-delay: 0.25s;
            } 

            a:hover span:nth-child(7) {
                transition-delay: 0.3s;
            } 

            .active span {
                font-weight: 1000;
                color: #FFFFFF;
            }
        }

        &__control {
            margin-left: auto;

            button {
                padding: 16px;
                color: #FFFAF0;
            }

            button:hover {
                cursor: pointer;
            }
        }
    }
</style>