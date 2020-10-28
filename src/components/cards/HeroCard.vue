<template>
    <figure class="hero">
        <img :src="require( `../../assets/images/heroes/${image}.png`)" alt="Hero">
        <div class="hero__name">{{ name }}</div>
        <div class="hero__steps">
            <div>
                <img src="../../assets/images/Step.png" alt="Steps">
            </div>
            <div>{{ steps }}</div>
        </div>
        <div class="hero__blusters">
            <div class="hero__bluster">
                <div>
                    <img src="../../assets/images/Skull.png">
                </div>
                <div>{{ blusters.skull }}</div>
            </div>
            <div class="hero__bluster">
                <div>
                    <img src="../../assets/images/Biology.png">
                </div>    
                <div>{{ blusters.biology }}</div>
            </div>
            <div class="hero__bluster">
                <div>
                    <img src="../../assets/images/Radiation.png">
                </div>
                <div>{{ blusters.radiation }}</div>
            </div>
        </div>
        <div class="hero__strength">
            <div>
                <img src="../../assets/images/Strength.png">
            </div>
             <div>{{ strength }}</div>
        </div>
        <div class="hero__ability">{{ ability }}</div>
    </figure>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true,
            default: 'Герой'
        },
        ability: {
            type: String,
            required: true,
            default: 'Способности героя не определены'
        },
        steps: {
            type: Number,
            required: true,
            default: 0
        },
        strength: {
            type: Number,
            required: true,
            default: 0
        },
        blusters: {
            type: Object,
            default() {
                return {
                    biology: 0,
                    radiation: 0,
                    skull: 0
                }
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .hero {
        position: relative;
        color: #FFFFFF;
        letter-spacing: 1px;
        font-size: 1.2vw;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        &__name {
            position: absolute;
            top: 0;
            right: 0;
            margin-right: 5%;
            margin-top: 5.8%;
            font-size: 1em;
        }

        &__steps {
            position: absolute;
            top: 0;
            left: 0;
            margin-left: 10%;
            margin-top: 6.8%;
            display: flex;
            width: 30%;
            font-size: 1.2em;

            div:first-child {
                height: 8%;
                width: 16%;
                margin-right: 7%;
            }

            div:last-child {
                line-height: 0.8;
            }
        }

        &__blusters {
            position: absolute;
            bottom: 0;
            left: 0;
            display: flex;
            align-items: center;
            height: 20%;
            width: 60%;
            margin-left: 7%;
            margin-bottom: 4%;
        }

        &__bluster {
            display: flex;
            align-items: center;
            height: 40%;
            width: 30%;
            padding-right: 2%;

            div:first-child {
                width: 60%;
                height: 100%;
                margin-right: 7%;
            }

            div:last-child {
                font-size: 1.2em;
            }
        }

        &__strength {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            position: absolute;
            bottom: 0;
            right: 0;
            margin-right: 5%;
            margin-bottom: 4%;
            width: 30%;
            height: 20%;

            div:first-child {
                width: 50%;
                height: 50%;
                margin-right: 7%;
            }

            div:last-child {
                font-size: 1.2em;
            }
        }

        &__ability {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            visibility: hidden;
            width: 70%;
            padding: 4%;
            background-color: #FFFFFF;
            color: #000000;
            font-size: 0.8em;
            letter-spacing: 0.3px;
            border-radius: 8px;
            opacity: 0;
            transition: opacity 0.8s, visibility 0s linear 0.8s;
        }

        &:hover {
            cursor: pointer;
        }

        &:hover .hero__ability{
            visibility: visible;
            opacity: 1;
            transition-delay: 0s;
        }
    }
</style>