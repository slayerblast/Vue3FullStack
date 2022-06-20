<script setup>
import {ref} from "vue"
</script>

<template>
<div class="container">
    <form class="row g-3">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Nom</label>
          <input type="text" class="form-control" >
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Prenom</label>
          <input type="text" class="form-control">
        </div>
        <div class="col-md-6">
          <label for="inputAddress" class="form-label">Adresse mail</label>
          <input type="email" class="form-control" placeholder="exemple@mail.fr">
        </div>
        <div class="col-md-6">
          <label for="inputAddress2" class="form-label">Mot de passe</label>
          <input type="password" class="form-control">
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
      </form>
</div>


</template>