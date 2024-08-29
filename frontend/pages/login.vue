<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <v-card-title class="text-h5 text-center" style="color: #2b9300;">Prijava</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="submitForm">
                <v-text-field v-model="email" label="Email" required persistent></v-text-field>
                <v-text-field v-model="lozinka" label="Lozinka" type="password" required persistent autocomplete="current-password"></v-text-field>

                <v-btn type="submit" color="green">Prijavi se</v-btn>
              </v-form>

              <!-- Prikazivanje poruka o uspjehu ili pogrešci -->
              <v-alert v-if="message && !isSuccessDialogOpen" :type="alertType" class="mt-4">
                {{ message }}
              </v-alert>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Dijalog za uspješan login -->
    <v-dialog v-model="isSuccessDialogOpen" max-width="400px">
      <v-card>
        <v-card-title class="headline">Uspješno prijavljivanje</v-card-title>
        <v-card-text>
          <p>Uspješno ste se prijavili!</p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="green" text @click="closeSuccessDialog">Zatvori</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapWritableState } from 'pinia';
import { useUsersStore } from '../stores/users.js';

export default {
  data() {
    return {
      email: '',
      lozinka: '',
      message: '', // Poruka za korisnika
      alertType: '', // Tip poruke: 'success' ili 'error'
      isSuccessDialogOpen: false, // Stanje dijaloga
    };
  },
  methods: {
    async submitForm() {
      try {
        // Provjeri da li su svi podaci uneseni
        if (!this.email || !this.lozinka) {
          this.message = 'Molimo unesite sve podatke.';
          this.alertType = 'error';
          return; // Prekini izvršavanje funkcije
        }

        const response = await $fetch(`${this.$config.public.BASE_URL}/login`, {
          method: 'POST',
          body: {
            email: this.email,
            password: this.lozinka
          }
        });

        // Provjeri odgovor
        console.log(response)
        if (response.user) {
          this.message = 'Uspješno ste prijavljeni!';
          this.alertType = 'success';
          this.user = response.user;

          // Spremanje odgovora u localStorage
          localStorage.setItem('user', JSON.stringify(response));

          // Otvori dijalog za uspješnu prijavu
          this.isSuccessDialogOpen = true;

          // Otići na naslovnu stranicu nakon što se dijalog zatvori
          setTimeout(() => {
            this.$router.push('/');
          }, 2000); // Kašnjenje od 2 sekunde prije nego što se preusmjeri na početnu stranicu
        } else {
          this.message = 'Neuspješna prijava. Provjerite vaše podatke.';
          this.alertType = 'error';
        }
      } catch (error) {
        console.log(error);
        this.message = 'Došlo je do greške prilikom prijave. Pokušajte ponovo.';
        this.alertType = 'error';
      }
    },
    closeSuccessDialog() {
      this.isSuccessDialogOpen = false;
    }
  },
  computed: {
    ...mapWritableState(useUsersStore, ['user'])
  }
};
</script>

<style>
/* Vaši stilovi */
</style>
