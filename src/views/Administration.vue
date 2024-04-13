<template>
    <header class="content">
        <img src="/img-logo.svg" alt="logo">
        <img src="@/assets/images/logo.png" alt="logo">
        <router-link to="/">Выйти</router-link>
    </header>
</template>
<script>
</script>
<style scoped>
header{
    display: grid;
    grid-template-columns: 0.5fr 5fr 1fr;
    align-items: center;
    margin-top: 1rem;
}
header a{
    color: black;
    padding: 1rem 2rem;
    border: 2px solid #F2AC44;
    border-radius: 5px;
    text-align: center;
    font-size: 16px;
}
</style>