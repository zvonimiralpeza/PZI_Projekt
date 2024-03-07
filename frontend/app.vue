<template>
  <v-app>
    <v-app-bar location="top" color="black" >
      <v-toolbar-title>
        PRODAJA & KUPOVINA UMJETNICKIH DJELA
      </v-toolbar-title>


      <NuxtLink to="/" class="mx-5">NASLOVNA</NuxtLink>
      <NuxtLink to="/akcija" class="mx-5" v-if="!user">UVID ZA GOSTE</NuxtLink>
      <NuxtLink to="/kupovina" class="mx-5" v-if="user">KUPOVINA SLIKA</NuxtLink>
      <NuxtLink to="/prodaja" class="mx-5" v-if="user">PRODAJA SLIKA</NuxtLink>
      <NuxtLink to="/login" class="mx-5" v-if="!user">LOGIN</NuxtLink>
      <NuxtLink to="/registracija" class="mx-5" v-if="!user">REGISTRACIJA</NuxtLink>
      <NuxtLink to="/Onama" class="mx-5">O NAMA</NuxtLink>
      <v-btn v-if="user" @click="userLogout" color="red">Logout</v-btn>
    </v-app-bar>
    
    <NuxtPage style="padding-top: 64px; height: 100%;"/>

    <v-footer color="black">
      <v-spacer></v-spacer>

      <v-container>
        <v-row>
          <v-col>
            <h4>Kontaktirajte nas</h4>
            <p>Broj telefona: +123 456 789</p>
            <p>Email: info@umjetnickagalerija.com</p>
          </v-col>

          <v-col>
            <h4>Lokacija</h4>
            <p>Adresa: Matice hrvatske, Mostar, BiH</p>
            <p>Radno vrijeme: Pon - Pet: 8:00 - 16:00</p>
          </v-col>

          <v-col>
            <h4>Načini kupnje</h4>
            <p>Molimo pročitajte naše uvjete korištenja prije kupnje.</p>
            
            <router-link to="/uvjeti-koristenja">Linkovi</router-link>
          </v-col>
        </v-row>
      </v-container>
      
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
import { mapWritableState  } from 'pinia';
import { useUsersStore } from './stores/users.js'

export default {
  mounted () {
    if (!this.user) {
      this.user = JSON.parse(localStorage.getItem('user'))
    }
  },
  data() {
    return {
      drawer: false,
      selectedItem1: null,
      selectedItem2: null,
      menuItems1: ['Opcija 1', 'Opcija 2', 'Opcija 3'],
      menuItems2: ['Opcija A', 'Opcija B', 'Opcija C'],
    };
  },
  methods: {
    handleButtonClick() {
      // Implementirajte logiku kada se pritisne gumb
      console.log('Button clicked!');
    },
    handleAuthorClick(author) {
      // Implementirajte logiku kada se odabere autor iz opadajućeg izbornika
      console.log(`Selected Author: ${author}`);
    },
    userLogout () {
      this.user = null
      localStorage.removeItem('user')
      navigateTo('/')
    }
  },
  computed: {
    ...mapWritableState(useUsersStore, ['user'])
  }
};
</script>

<style>
/* Add your custom styles here */
</style>