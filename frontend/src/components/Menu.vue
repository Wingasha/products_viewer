<template>
  <ul>
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="add">Add product</router-link>
    </li>
  </ul>
</template>

<script>
    export default {
        name: "custom-menu"
    }
</script>

<style scoped>
  ul {
    width: 600px;
    list-style: none;
    margin: 0;
    padding-left: 0;
    background: #10a0ff;/*добавляем фон всему меню*/
    height: 50px; /*задаем высоту*/
  }
  a {
    text-decoration: none; /*убираем подчеркивание текста ссылок*/
    background:#007bff;; /*добавляем фон к пункту меню*/
    color:#fff; /*меняем цвет ссылок*/
    padding:0px 15px; /*добавляем отступ*/
    line-height:50px; /*ровняем меню по вертикали*/
    display: block;
    border-right: 2px solid #e9f3f3; /*добавляем бордюр справа*/
    -moz-transition: all 0.3s 0.01s ease; /*делаем плавный переход*/
    -o-transition: all 0.3s 0.01s ease;
    -webkit-transition: all 0.3s 0.01s ease;

  }
  a:hover {
    background: #2247d4;/*добавляем эффект при наведении*/
  }
  li {
    float:left; /*Размещаем список горизонтально для реализации меню*/
  }
</style>
