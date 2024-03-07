<template>
    <div>
        
        <v-img
            src="https://images.pexels.com/photos/5466867/pexels-photo-5466867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Mona Lisa pozadinska slika"
            class="mb-5"
            width="100%"
            height="auto"
            max-height="300"
            cover="object-fit: cover; object-position: top;"
        ></v-img>

        <div align="center">
            <p style="font-size: 20px; color:red"> PRODAJA & KUPOVINA UMJETNICKIH DJELA ONLINE </p><br>
Pridružite se našoj online umetničkoj zajednici i započnite sa prodajom umetničkih djela danas! <br>
Mi smo online galerija za kupovinu i prodaju originalnih slika, fotografija i još mnogo toga. <br>
Sa samo nekoliko klikova možete napraviti Vaš račun, učitati proizvode koje želite prodati, postaviti cijene i početi prodavati ili kupovati <br>
svoja djela online kupcima širom svijeta. Ako ste zainteresirani za prodaju na internet mreži, došli ste na pravo mjesto. <br>
        </div>

        <v-container align=center>
            <v-row class="flex justify-center">
            <v-col>
                <v-card color=blue-grey-lighten-1 class="mx-auto">
                <v-img
                    src="https://img001.prntscr.com/file/img001/gkl0O2lzRl2tRdzXGzvZbA.png"
                    alt="Slika 1"
                    class="my-3"
                    width="300"
                    height="300"
                ></v-img>
                <v-card-text>
                    PRONADJI SLIKARA !
                    <v-spacer></v-spacer>
                </v-card-text>
                </v-card>
            </v-col>

            <v-col>
                <v-card color=blue-grey-lighten-1>
                <v-img
                    src="https://img001.prntscr.com/file/img001/R3uLOyWcS0OdpOk80CaMuw.png"
                    alt="Slika 2"
                    class="my-3"
                    width="300"
                    height="300"
                ></v-img>
                <v-card-text>
                    PRONADJI ZELJENU TEHNIKU !
                    <v-spacer></v-spacer>    
                </v-card-text>
                </v-card>
            </v-col>

            <v-col>
                <v-card color=blue-grey-lighten-1>
                <v-img
                    src="https://img001.prntscr.com/file/img001/29xZgQNLQbOCB4Tmj5pp6Q.png"
                    alt="Slika 2"
                    class="my-3"
                    width="300"
                    height="300"
                ></v-img>
                <v-card-text>
                    PRONADJI NAJNOVIJE SLIKE !
                    <v-spacer></v-spacer>    
                </v-card-text>
                </v-card>
            </v-col>

        
            <v-col>
                <v-card color=blue-grey-lighten-1>
                <v-img
                    src="https://img001.prntscr.com/file/img001/2vk2LpMwSvOQDjDFFzH_ZA.png"
                    alt="Slika 2"
                    class="my-3"
                    width="300"
                    height="300"
                ></v-img>
                <v-card-text>
                    SIGURNO PLACANJE I DOSTAVA !
                    <v-spacer></v-spacer>    
                </v-card-text>
                </v-card>
            </v-col>


            <v-col>
                <v-card color=blue-grey-lighten-1>
                <v-img
                    src="https://img001.prntscr.com/file/img001/coC5xQenQXS8NrX8dLDuVg.png"
                    alt="Slika 3"
                    class="my-3"
                    width="300"
                    height="300"
                ></v-img>
                <v-card-text>
                    PRONADJI SLIKU PREMA MOTIVU !
                    <v-spacer></v-spacer>
                </v-card-text>
                </v-card>
            </v-col>
            </v-row>
        </v-container>

        
    </div>


    
    
</template>

<script>
export default {
    beforeMount () {
        this.dohvatiSlike()
    },
    data () {
        return {
            slike: []
        }
    },
    methods: {
        async dohvatiSlike () {
            try {
                const response = await $fetch('http://localhost:5000/products', {
                method: 'GET'
                })
                console.log(response)
                this.slike = response.products
            } catch (error) {
                console.error('Error making POST request:', error);
            }
        }
    }
}
</script>