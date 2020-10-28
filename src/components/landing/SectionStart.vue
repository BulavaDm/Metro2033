<template>
    <section class="section section-start"/>
</template>

<style scoped lang="scss">
    .section-start {
        background-image: url("../../assets/images/Metro.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        background-attachment: scroll;
        animation: appearance 10s;
    }

    @keyframes appearance {
        0% {
            filter: grayscale(100%);
        }

        100% {
            filter: grayscale(0%);
        }
    }
</style>