<template>
    <div>
        <!-- <header class="header">
            <router-link tag="img" :src="require('../assets/images/icon-start.png')" :to="{ name: 'Landing' }" class="header__logo"/>

            <nav class="header__menu">
                <router-link :to="{ name: 'Landing', hash: '#history' }">
                    <span>И</span><span>с</span><span>т</span><span>о</span><span>р</span><span>и</span><span>я</span>
                </router-link>
                <router-link :to="{ name: 'Landing', hash: '#heroes' }">
                    <span>Г</span><span>е</span><span>р</span><span>о</span><span>и</span>
                </router-link>
                <router-link :to="{ name: 'Landing', hash: '#fractions' }">
                    <span>Ф</span><span>р</span><span>а</span><span>к</span><span>ц</span><span>и</span><span>и</span>
                </router-link>
                <router-link :to="{ name: 'Landing', hash: '#rules' }">
                    <span>П</span><span>р</span><span>а</span><span>в</span><span>и</span><span>л</span><span>а</span>
                </router-link>
            </nav>

            <div class="header__control">
                <button type="button" @click=test>Войти</button>
            </div>
        </header> -->

        <aside class="sidebar">
            <div class="sidebar__control">
                <router-link tag="img" :src="require('../assets/images/start.png')" :to="{ name: 'Landing' }"/>
            </div>
            <div class="sidebar__control">
                <router-link tag="img" :src="require('../assets/images/history.png')" :to="{ name: 'Landing', hash: '#history' }"/>
            </div>
            <div class="sidebar__control">
                <router-link tag="img" :src="require('../assets/images/heroes.png')" :to="{ name: 'Landing', hash: '#heroes' }"/>
            </div>
            <div class="sidebar__control">
                <router-link tag="img" :src="require('../assets/images/fractions.png')" :to="{ name: 'Landing', hash: '#fractions' }"/>
            </div>
        </aside>
        <section-start/>
        <section-history/>
        <section-heroes/>
        <section-fractions/>

        <!-- <audio autoplay controls>
            <source src="assets/audio/metro_2033.mp3" type="audio/mpeg"/>
        </audio>  -->
    </div>
</template>

<script>
import SectionStart from '../components/landing/SectionStart.vue';
import SectionHistory from '../components/landing/SectionHistory.vue';
import SectionHeroes from '../components/landing/SectionHeroes.vue';
import SectionFractions from '../components/landing/SectionFractions.vue';

export default {
    components: {
        SectionStart,
        SectionHistory,
        SectionHeroes,
        SectionFractions
    }
}
</script>

<style scoped lang="scss">
    .sidebar {
        position: fixed;
        left: 0;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 10;
        padding: 12px;

        &__control {
            width: 5vw;
            margin-bottom: 12px;

            img {
                max-width: 100%
            }
        }

        &__control:hover {
            cursor: pointer;
        }
    }

    .btn {
        width: 50px;
        height: 50px;
        background: green;
    }

    // .header {
    //     position: fixed;
    //     width: 100%;
    //     display: flex;
    //     flex-direction: column;
    //     align-items: center;
    //     padding: 12px 24px;
    //     font-size: 1.4vw;
    //     z-index: 10;
    //     box-shadow: 0 5px 20px -10px #000;
    //     background: #110D0C;

    //     &__logo {
    //         width: 4%;
    //         min-width: 4%;
    //     }

    //     &__logo:hover {
    //         cursor: pointer;
    //     }

    //     &__menu {
    //         display: flex;
    //         align-items: center;

    //         a {
    //             padding: 16px;
    //         }

    //         a span {
    //             font-weight: 100;
    //             transition: all .3s;
    //             color: #FFFAF0;
    //         }

    //         a span:nth-child(2) {
    //             transition-delay: 0.05s;
    //         }

    //         a span:nth-child(3) {
    //             transition-delay: 0.1s;
    //         }

    //         a span:nth-child(4) {
    //             transition-delay: 0.15s;
    //         }

    //         a span:nth-child(5) {
    //             transition-delay: 0.2s;
    //         }

    //         a span:nth-child(6) {
    //             transition-delay: 0.25s;
    //         }

    //         a span:nth-child(7) {
    //             transition-delay: 0.3s;
    //         }

    //         a:hover span {
    //             font-weight: 600;
    //             color: #FFFFFF;
    //         }

    //         a:hover span:nth-child(1) {
    //             transition-delay: 0s;
    //         }

    //         a:hover span:nth-child(2) {
    //             transition-delay: 0.05s;
    //         }

    //         a:hover span:nth-child(3) {
    //             transition-delay: 0.1s;
    //         }

    //         a:hover span:nth-child(4) {
    //             transition-delay: 0.15s;
    //         }

    //         a:hover span:nth-child(5) {
    //             transition-delay: 0.2s;
    //         }

    //         a:hover span:nth-child(6) {
    //             transition-delay: 0.25s;
    //         }

    //         a:hover span:nth-child(7) {
    //             transition-delay: 0.3s;
    //         }

    //         .router-link-active span {
    //             font-weight: 1000;
    //             color: #FFFFFF;
    //         }
    //     }

    //     &__control {
    //         margin-left: auto;

    //         button {
    //             padding: 16px;
    //             color: #FFFAF0;
    //         }

    //         button:hover {
    //             cursor: pointer;
    //         }
    //     }
    // }
</style>
