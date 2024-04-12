<template>
    <div class="content">
        <div class="counter">
            <img src="/icons/counter-img.svg" alt="logo">
            <p>Решённые заявки :</p>
            <p>{{ count }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TheCounter'
}
</script>
<script setup>
import { reactive } from 'vue'

const count = reactive(20)
</script>
<style scoped>
.content{
    margin-top: 2rem;
}
.counter{
    border: 1px dashed black;
    align-items: center;
    text-align: center;
    border-radius: 12px;
    margin: 0 18rem;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    padding: 1rem 2rem;
    font-size: 32px;
}
</style>