<template>
    <div class="content">
    <header class="content">
        <img src="/img-logo.svg" alt="logo">
        <img src="@/assets/images/logo.png" alt="logo">
        <router-link to="/">Выйти</router-link>
    </header>
    <div class="starter-grid">
    <div class="left-menu">
        <b>Меню</b>
        <router-link to="/appli">Мои заявки</router-link>
        <router-link to="/add">Добавить заявку</router-link>
        <router-link to="/allappli">Все заявки</router-link>
        <router-link to="/lc">Личный кабинет</router-link>
    </div>
    <p class="welcome-text">Добро пожаловать в кабинет пользователя, здесь вы можете просмотреть статус созданных заявок или создать новые</p>    
    </div>
    </div>
</template>
<script>
</script>
<style scoped>
b {
    font-size: 22px;
}
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
.left-menu {
    display: grid;
    grid-template-rows: 1.5fr 1fr 1fr 1fr 1fr;
    background: #92b8dd;
    padding: 2rem;
    border-radius: 20px;
}
.left-menu a{
    color: black;
    padding: 0.2rem 0;
}
.starter-grid {
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
    margin-top: 2rem;
}
.welcome-text {
    margin: 0 2rem;
}
</style>