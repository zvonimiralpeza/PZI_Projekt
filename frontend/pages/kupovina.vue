<template>
  <v-app>
    <v-container>
      <v-row>
        <v-container class="black">
            <!-- Red sa izbornicima i gumbom -->
            <v-row>
              <v-col>
                <v-select
                  v-model="odabraniAutor"
                  :items="autori"
                  label="Autori"
                  clearable
                ></v-select>
              </v-col>
            </v-row>
        </v-container>

        <v-col v-for="slika in filtriraneSlike" :key="slika.id" cols="12" md="6" lg="4">
          <v-card color=blue-grey-lighten-1>
            <!-- Slika -->
            <v-img
              :src="slika.url"
              alt="Umjetničko djelo"
              class="grey lighten-2"
              height="200"
            ></v-img>

            <v-card-title :style="{ color: 'cyan', fontSize: '22px'}">{{ slika.name }}</v-card-title>
            <v-card-subtitle :style="{ color: 'orange', fontSize: '17px', fontWeight: 'bold'}">Cijena : {{slika.price}}€</v-card-subtitle>
            <br>
            <v-card-subtitle :style="{ color: 'white', fontSize: '17px'}">Ime autora : {{ slika.author }}</v-card-subtitle>
            <v-card-subtitle :style="{ color: 'white', fontSize: '17px'}">Godina stvaranja : {{ slika.year }}.</v-card-subtitle>
            <v-card-subtitle :style="{ color: 'white', fontSize: '17px'}">Tehnika : {{ slika.technique }}</v-card-subtitle>
            <v-card-actions>
              <v-btn @click="redirectToPayPal()" color="yellow">Kupi</v-btn>
              <v-btn @click="deleteImage(slika.id)" color="red" v-if="user && user.role === 'Admin'">Obriši sliku</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapWritableState } from 'pinia';
import { useUsersStore } from '../stores/users.js';

export default {
  beforeMount() {
    this.dohvatiSlike();
  },
  data() {
    return {
      slike: [],
      odabraniAutor: null
    };
  },
  methods: {
    async deleteImage(slikaId) {
      try {
        const response = await $fetch(`${this.$config.public.BASE_URL}/products/${slikaId}`, {
          method: 'DELETE'
        });
        const matchingIndex = this.slike.findIndex(el => el.id === slikaId);
        if (matchingIndex > -1) {
          this.slike.splice(matchingIndex, 1);
        }
      } catch (error) {
        console.error('Greška prilikom brisanja slike:', error);
      }
    },
    redirectToPayPal() {
      const paypalURL = 'https://www.paypal.com/ba/home';
      window.open(paypalURL, '_blank');
    },
    buyArtwork(artwork) {
      console.log(`Kupljeno umjetničko djelo: ${artwork.title}`);
    },
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
    }
  },
  computed: {
    ...mapWritableState(useUsersStore, ['user']),
    autori() {
      const tempArray = [];
      this.slike.forEach(el => {
        if (!tempArray.includes(el.author)) {
          tempArray.push(el.author);
        }
      });
      return tempArray;
    },
    filtriraneSlike() {
      if (this.odabraniAutor) {
        return this.slike.filter(el => el.author === this.odabraniAutor);
      } else {
        return this.slike;
      }
    }
  }
};
</script>
