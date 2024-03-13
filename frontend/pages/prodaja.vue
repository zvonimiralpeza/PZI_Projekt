<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card class="small-card">
            <v-card-title class="text-h6 text-center" style="font-family: ; color: #2b9300;">Prodaja umjetnine</v-card-title>
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
  data() {
    return {
      naslov: '',
      cijena: '',
      autor: '',
      godina: '',
      tehnika: '',
      url: ''
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await $fetch(`${this.$config.public.BASE_URL}/products`, {
          method: 'POST',
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
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>
