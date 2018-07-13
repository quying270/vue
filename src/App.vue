<template>
  <div id="app">
    <header></header>
    <header class="fixed" v-text="title"></header>
    <headNav></headNav>
    <router-view/>
    <footer>
      
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      title: 'quying'
    }
  },
  created () {
    remChange()
    window.addEventListener('resize', remChange)
    function remChange () {
      var html = document.getElementsByTagName('html')[0]
      var witdh = html.getBoundingClientRect().width
      if (witdh >= 750) {
        witdh = 750
      }
      html.style.fontSize = witdh / 10 + 'px'
    }
    this.$ajax.get(this.dataURL('vue.php', 'vueTitle'))
      .then((res) => {
        this.title = res.data
      })
  }
}
</script>

<style scoped lang="less">
@rem:750/10rem;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 750px;
  height: 100%;
  margin: auto;
  position: relative;
  header{
    display: block;
    height: 80/@rem;
    line-height: 80/@rem;
    font-size: 30/@rem;
    color: white;
    background: #26a2ff;
  }
  header.fixed{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 100%;
      z-index: 999;
  }
  footer{
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9;
    height: 130/@rem;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#d9d9d9), color-stop(50%, #d9d9d9), color-stop(50%, transparent));
    background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: top left;

    /* background-color: #fafafa; */
    background: #26a2ff;
    display: flex;
    text-align: center;
  }
}
</style>
