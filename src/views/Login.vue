<template>
  <div class="login">
    <div>
    <form>
      <p>Добро пожаловать</p>
      <label for="mail">Email</label>
      <input type="email" name="mail">
      <label for="password">Пароль</label>
      <input type="password" name="password">
      <router-link to="/administration"><button>Продолжить</button></router-link>
      <router-link to="/register">Создать аккаунт</router-link>
    </form>
  </div>
  </div>
</template>

<style scoped>
p {
  margin: 0;
  padding: 2rem 0;
  font-size: 36px;
  font-weight: 600;
}
.login {
  background: url(/login-bg.jpg) no-repeat;
  background-size: 100% 100%;
  min-height: 100vh;
  min-width: 100vw;
}
.login div {
  backdrop-filter: blur(5px);
  min-height: 70vh;
  min-width: 100vw;
  padding: 15vh 0;
}
form {
  background: rgba(217, 217, 217, 0.7);
  backdrop-filter: blur(5px);
  margin: 0 auto;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  padding: 4rem 8rem;
  border-radius: 40px;
  text-align: center;
  font-size: 19px;
}
form label {
  text-align: left;
  padding: 0.5rem 0;
}
form input {
  background: none;
  border: none;
  border-bottom: 2px solid black;
  padding: 1rem 0.5rem;
  font-size: 19px;
}
form input:focus {
  outline: none;
}
form button {
  background: #6C7483;
  color: white;
  border: none;
  margin: 5rem auto 1rem auto;
  border-radius: 50px;
  padding: 1rem 4rem;
  font-size: 20px;
}
form a {
  color: black;
  margin: 0 auto;
}
</style>
