<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card class="small-card">
            <v-card-title class="text-h6 text-center" style="font-family: ; color: #2b9300;">Registracija</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="submitForm">
                <v-text-field v-model="ime" label="Ime" required persistent></v-text-field>
                <v-text-field v-model="prezime" label="Prezime" required persistent></v-text-field>
                <v-text-field v-model="brojTelefona" label="Broj telefona" required persistent></v-text-field>
                <v-text-field v-model="email" label="Email" required persistent></v-text-field>
                <v-text-field v-model="lozinka" label="Lozinka" type="password" required persistent></v-text-field>
                <v-btn type="submit" color="green">Potvrdi</v-btn>
              </v-form>
              <br>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>





<script>
export default {
  data() {
    return {
      ime: '',
      prezime: '',
      brojTelefona: '',
      email: '',
      lozinka: ''
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await $fetch(`${this.$config.public.BASE_URL}/users`, {
          method: 'POST',
          body: {
            first_name: this.ime,
            last_name: this.prezime,
            email: this.email,
            phone: this.brojTelefona,
            password: this.lozinka,
            role: 'Normal'
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style scoped>
/* Dodatni stilovi za umanjenu karticu */
.small-card {
  width: 100%; /* Prilagođavanje širine prema potrebi */
  margin-top: 20px; /* Prilagođavanje razmaka s vrha */
}
</style>