<template>
  <div id="navComponent" class="container-fluid">
    <div class="row">
      <div class="col-xs-11"></div>
      <div class="col-xs-1 personal">
        <span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navComponent'
}
</script>

<style>
  #navComponent {
    background-color: rgb(56, 105, 200);
    height: 4.5em;
    padding: 1em;
  }
  .glyphicon {
    font-size: 2.5em;
  }
  .personal:hover{
    cursor: pointer;
  }
</style>
