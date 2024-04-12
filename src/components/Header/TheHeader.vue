<template>
    <header class="content">
        <img src="@/assets/images/logo.png" alt="logo">
        <a href="./logIn.vue">Войти</a>
    </header>
</template>
<script>
export default {
    name: 'TheHeader'
}
</script>
<style scoped>
header{
    display: grid;
    grid-template-columns: 5fr 1fr;
    align-items: center;
    margin-top: 1rem;
}
header a{
    color: black;
    padding: 1rem 2rem;
    border: 2px solid #F2AC44;
    border-radius: 5px;
    text-align: center;
}
</style>