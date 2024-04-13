<template>
    <div class="content">
        <h3>Наши завершенные проекты:</h3>
        <div class="projects">
            <div class="project-item">
                <img src="@/assets/images/banner.jpg" alt="img">
            </div>
            <div class="project-item">
                <img src="@/assets/images/banner.jpg" alt="img">
            </div>
            <div class="project-item">
                <img src="@/assets/images/banner.jpg" alt="img">
            </div>
            <div class="project-item">
                <img src="@/assets/images/banner.jpg" alt="img">
            </div>
            <div class="project-item">
                <img src="@/assets/images/banner.jpg" alt="img">
            </div>
            <div class="project-item">
                <img src="@/assets/images/banner.jpg" alt="img">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FinalWork'
}
</script>
<style scoped>
h3 {
    text-align: center;
}
.projects{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row: 2rem;
    grid-gap: 2rem;
    text-align: center;
    margin: 4rem 0;
}
.project-item{
    box-shadow: -20px 16px #7E94C6;
    border-radius: 5px;
}
.project-item img{
    max-width: 100%;
    border-radius: 5px;
}
</style>