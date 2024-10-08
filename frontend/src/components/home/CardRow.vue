<template>
  <v-row
    no-gutters
  >
    <v-col
      v-for="(item, index) in cards"
      :key="index"
      cols="3"
    >
      <v-card
        class="mx-auto"
        color="white"
        hover
        link
      >
        <v-img
          :src="item.imgSrc"
          cover
        ></v-img>

        <v-card-item>
          <v-card-title>
            {{ item.title }}
          </v-card-title>
        </v-card-item>

        <v-card-actions>
          <v-btn
            color="teal-accent-4"
            text="Plus"
            variant="text"
            @click="item.reveal = true"
          ></v-btn>
        </v-card-actions>

        <v-expand-transition>
          <v-card
            v-if="item.reveal"
            class="position-absolute w-100 bg-white opacity-90"
            height="100%"
            style="bottom: 0;"
          >
            <v-card-text class="pb-0">
              {{ item.text }}
            </v-card-text>

            <v-card-actions class="d-flex justify-space-between">
              <v-btn
                color="teal-accent-4"
                text="fermer"
                variant="text"
                @click="item.reveal = false"
              ></v-btn>
              <v-btn
                color="teal-accent-4"
                icon="mdi-open-in-new"
                :href="item.src"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-expand-transition>

      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import {Card} from '@/models/Card'

defineProps({
  cards: {
    type: Array as PropType<Card[]>,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.v-row {
  margin-top: 10px;
  width: 80%;
}

.v-col {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.v-card {
  width: 350px;
  height: 320px;
  color: black;

  .v-img {
    height: 160px;
  }

  .v-card-item {
    padding: 0;
    height: 110px;

    .v-card-title {
      padding: 5px 8px;
      height: 100%;
      font-size: 18px;
      white-space: wrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .v-card-actions {
    padding: 0;

    .v-btn {
      font-size: 18px;
    }
  }
}

.v-card-text {
  padding: 5px 8px;
  height: 270px;
  font-size: 16px;
}
</style>
