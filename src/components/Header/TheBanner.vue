<template>
    <div class="content banner">
        <div class="banner-script">
            <h3>Сделаем город лучше вместе!</h3>
            <a href="#">Сообщить о проблеме</a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TheBanner'
}
</script>
<style scoped>
.banner{
    margin-top: 2rem;
    background: url('@/assets/images/banner.jpg');
    height: 35rem;
}
.banner-script{
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(3px);
    height: 10rem;
    padding: 20rem 0 5rem 7rem;
    margin-right: 30rem;
}
.banner-script h3{
    font-size: 32px;
    color: white;
}
.banner-script a{
    color: white;
    padding: 1rem 2rem;
    background: rgba(193, 190, 203, 0.7);
    border-radius: 5px;
}
</style>