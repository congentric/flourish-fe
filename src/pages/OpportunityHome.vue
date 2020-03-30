<template>
  <v-app id="OpHome">
    <v-app-bar app clipped-right color="blue-grey" dark>
      <v-toolbar-title>Flourish Logo</v-toolbar-title>
      <v-spacer />
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row justify="center" align="center">
          <v-col class="shrink">
            <v-btn color="pink" dark @click.stop="handleOpenItemDetail">
              Show Detail Side-Sheet
            </v-btn>
            <v-btn color="pink" dark @click.stop="handleOpenItemEdit">
              Show Edit Side-Sheet
            </v-btn>
            <v-btn color="pink" dark @click.stop="handleOpenItemCreate">
              Show Create Side-Sheet
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-navigation-drawer v-model="drawer" :width="645" right absolute temporary>
      <v-container>
        <v-btn icon @click.stop="drawer = false">
          <v-icon>mdi-window-close</v-icon>
        </v-btn>
      </v-container>

      <v-divider></v-divider>
      <v-container>
        <router-view />
      </v-container>
    </v-navigation-drawer>

    <v-footer app color="blue-grey" class="white--text">
      <span>Footer</span>
      <v-spacer />
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import router from '../routes/router';

export default {
  props: {
    source: String,
  },
  methods: {
    handleOpenItemDetail() {
      this.drawer = true;
      router.push({ name: 'OpDetails', params: { opportunityId: '23' } });
    },
    handleOpenItemEdit() {
      this.drawer = true;
      router.push({ name: 'OpEdit', params: { opportunityId: '23' } });
    },
    handleOpenItemCreate() {
      this.drawer = true;
      router.push({ name: 'OpCreate', params: { opportunityId: '23' } });
    },
  },
  data: () => ({
    drawer: null,
  }),
};
</script>
