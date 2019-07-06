<template>
    <div class="navbar">
        <header>
            <h2>{{ title }}</h2>
            <img src="" alt="">
        </header>
    </div>
</template>

<script>
  export default {
    name: "navbar",
    props: {
      title: String,
      require: true
    }
  }
</script>

<style scoped>
    /*标题样式*/
    header {
        height: 60px;
        background-color: #2A82E4;
        width: 100%;
        border-bottom: 2px solid #FFB211;
    }
    header h2{
        text-align: center;
        font-size: 1.2em;
        color: #eee;
        font-weight: 600;
        line-height: 60px;
    }
</style>