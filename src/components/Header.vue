<template>
    <div class="header-wrapper">
        <div class="logo-wrapper">
            <img src="../assets/hepsiburadaLogo.png" alt="" class="logo">
        </div>
        <div class="title-wrapper">
            <p class="title">
                <span class="link">Link</span>
                <span class="vote">VOTE</span>
                Challenge
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang="sass">
    $header-border-dark-gray : #b4b4b4

    .header-wrapper
        display: flex
        border-bottom: 1px solid $header-border-dark-gray
        font-size: 23px
        .logo-wrapper
            justify-content: flex-start
            flex: 1
            .logo
                width: 100%
                padding-bottom: 10px
        .title-wrapper
            display: flex
            flex: 2
            justify-content: flex-end
            align-self: flex-end
            font-weight: 500
            .title
                margin-bottom: 5px
                .link
                    font-weight: 900
                .vote
                    font-weight: 200
    @media screen and (max-width: 767px)
        .header-wrapper
            .logo-wrapper, .title-wrapper
                flex: 1
            .logo-wrapper
                .logo
                    padding-bottom: 0
            .title-wrapper
                font-size: 13px

</style>