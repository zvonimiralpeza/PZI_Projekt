<template>
    <div>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card class="small-card">
              <v-card-title class="text-h6 text-center" style="color: #2b9300;">Uređivanje umjetnine</v-card-title>
              <v-card-text>
                <v-form @submit.prevent="submitForm">
                  <v-text-field v-model="naslov" label="Naslov umjetnine" required persistent></v-text-field>
                  <v-text-field v-model="cijena" label="Cijena umjetnine" required persistent></v-text-field>
                  <v-text-field v-model="autor" label="Autor umjetnine" required persistent></v-text-field>
                  <v-text-field v-model="godina" label="Godina stvaranja" required persistent></v-text-field>
                  <v-text-field v-model="tehnika" label="Tehnika" required persistent></v-text-field>
                  <v-text-field v-model="url" label="URL" required persistent></v-text-field>
                  <input type="file" ref="fileInput" @change="handleFileChange" accept=".jpg, .jpeg, .png" />
                  <br><br>
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
    created() {
        this.dohvatiSlike()
            .then(() => {
                let matchingSlika = this.slike.find(el => el.id === parseInt(this.$route.query.id))
                matchingSlika = JSON.parse(JSON.stringify(matchingSlika))
                if (matchingSlika) {
                    this.naslov = matchingSlika.name
                    this.cijena = matchingSlika.price
                    this.autor = matchingSlika.author
                    this.godina = matchingSlika.year
                    this.tehnika = matchingSlika.technique
                    this.url = matchingSlika.url
                }
            })
    },
    data() {
      return {
        naslov: '',
        cijena: '',
        autor: '',
        godina: '',
        tehnika: '',
        url: '',
        slike: []
      };
    },
    methods: {
    async dohvatiSlike() {
      try {
        const response = await $fetch(`${this.$config.public.BASE_URL}/products`, {
          method: 'GET'
        });
        console.log(response);
        this.slike = response.products;
      } catch (error) {
        console.error('Error making POST request:', error);
      }
    },
      async submitForm() {
        try {
          const response = await $fetch(`${this.$config.public.BASE_URL}/products/${this.$route.query.id}`, {
            method: 'PUT',
            body: {
              name: this.naslov,
              price: this.cijena,
              author: this.autor,
              year: this.godina,
              technique: this.tehnika,
              url: this.url,
              seller_id: 1
            }
          })
          this.$router.push('/kupovina');
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
  </script>
  