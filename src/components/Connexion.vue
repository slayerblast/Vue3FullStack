<script setup>
import {ref} from "vue"
</script>

<template>
    <div class="container">
        <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">adresse email</label>
              <input type="email" class="form-control" id="exampleInputEmail1">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">mot de passe</label>
              <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
    </div>

</template>