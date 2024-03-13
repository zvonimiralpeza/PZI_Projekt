<template>
    <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <v-card-title class="text-h5 text-center" style="font-family: ; color: #2b9300;">Prijava</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="submitForm">
                <v-text-field v-model="email" label="Email" required persistent></v-text-field>
                <v-text-field v-model="lozinka" label="Lozinka" type="password" required persistent></v-text-field>

                <v-btn type="submit" color="green">Prijavi se</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    </div>
</template>




<script>
import { mapWritableState  } from 'pinia';
import { useUsersStore } from '../stores/users.js'

export default {
  data() {
    return {
      email: '',
      lozinka: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        // Provjeri postoji li korisnik u lokalnom spremniku
        if (!this.email || !this.lozinka) {
          alert('Korisnik ne postoji. Molimo provjerite vaše podatke ili se registrirajte.');
          return; // Prekini izvršavanje funkcije
        }
        
        const response = await $fetch(`${this.$config.public.BASE_URL}/login`, {
          method: 'POST',
          body: {
            email: this.email,
            password: this.lozinka
          }
        });
        this.user = response.user
        // Spremanje odgovora u localStorage
        localStorage.setItem('user', JSON.stringify(response));
        
        // Otići na naslovnu stranicu
        navigateTo('/')
      } catch (error) {
        console.log(error);
        // Obavijstiti korisnika da su unešeni podaci pogrešni
      }
    },
  },
  computed: {
    ...mapWritableState(useUsersStore, ['user'])
  }
};
</script>



<style>
/* Vaši stilovi */
</style>