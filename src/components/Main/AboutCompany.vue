<template>
    <div class="content">
        <h3>О компании</h3>
        <div class="withbanner-des">
            <img src="@/assets/images/about-banner.jpg" alt="banner">
            <p>"Сделаем лучше вместе" - это команда профессионалов, объединенных общей целью обеспечить качественный и надежный ремонт дорог для комфорта и безопасности наших клиентов. Мы специализируемся на ремонте и реконструкции дорожного покрытия, улучшая инфраструктуру и обеспечивая удобные условия для передвижения.</p>
        </div>
        <b>Наши ценности:</b>
        <ul>
            <li>Профессионализм: Наша команда состоит из опытных специалистов, готовых решать любые задачи, связанные с ремонтом дорог.</li>
            <li>Качество: Мы стремимся к высокому качеству работы, используя инновационные методы и материалы, чтобы обеспечить долговечность и надежность каждого проекта.</li>
            <li>Сотрудничество: Мы искренне верим в силу совместного труда и готовы сотрудничать с заказчиками, предлагая индивидуальный подход к каждому проекту.</li>
        </ul>
        <p class="about-icon"><img src="/icons/about-icon.svg" alt="icon"></p>
    </div>
</template>
<script>
export default {
    name: 'AboutCompany'
}
</script>
<style scoped>
div h3{
    font-size: 24px;
    padding: 6rem 2rem 1rem 2rem;
    text-align: center;
    background: url(/icons/about-company.svg) no-repeat right 42% top 80%;
}
ul {
    list-style-type: '—     ';
}
.withbanner-des{
    display: flex;
    align-items: center;
    margin: 2rem 0;
}
.withbanner-des p{
    padding: 2rem 4rem;
}
.about-icon{
    text-align: right;
    margin: 0;
}
</style>