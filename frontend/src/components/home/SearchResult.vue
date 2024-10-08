<template>
  <v-card class="bg-white">
    <div class="title d-flex flex-row align-center w-100">
      <div class="d-flex flex-row justify-center align-center w-25">
        <v-icon icon="mdi-domain"/>
        <span>Nom</span>
      </div>
      <div class="d-flex flex-row justify-center align-center w-50">
        <v-icon icon="mdi-map-marker"/>
        <span>Adresse</span>
      </div>
    </div>
    <ul>
      <li
        v-for="(item, i) in itemsShown"
        :key="i"
        class="d-flex flex-row align-center w-100"
      >
        <div class="w-25 text-center">{{ item.name }}</div>
        <div class="w-50 text-center">{{ item.address }}</div>
        <v-dialog class="w-25 text-center">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn
              v-bind="activatorProps"
              color="primary"
              rounded="xl"
            >
              Prendre RDV
            </v-btn>
          </template>

          <template v-slot:default="{ isActive }">
            <v-card
              prepend-icon="mdi-account"
              title="User Profile"
            >
              <v-card-text>
                <v-row dense>
                  <v-col
                    cols="12"
                    md="4"
                    sm="6"
                  >
                    <v-text-field
                      label="First name*"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    md="4"
                    sm="6"
                  >
                    <v-text-field
                      hint="example of persistent helper text"
                      label="Last name*"
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    md="4"
                    sm="6"
                  >
                    <v-text-field
                      label="Email*"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    md="4"
                    sm="6"
                  >
                    <v-text-field
                      label="Password*"
                      type="password"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    md="4"
                    sm="6"
                  >
                    <v-text-field
                      label="Confirm Password*"
                      type="password"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-select
                      :items="['0-17', '18-29', '30-54', '54+']"
                      label="Age*"
                      required
                    ></v-select>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-autocomplete
                      :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                      label="Interests"
                      auto-select-first
                      multiple
                    ></v-autocomplete>
                  </v-col>
                </v-row>

                <small class="text-caption text-medium-emphasis">*indicates required field</small>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  text="Close"
                  variant="plain"
                  @click="isActive.value = false"
                ></v-btn>

                <v-btn
                  color="primary"
                  text="Save"
                  variant="tonal"
                  @click="isActive.value = false"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </template>

        </v-dialog>
      </li>
    </ul>
  </v-card>

  <v-pagination
    v-model="pageNum"
    :length=length
    :total-visible="7"
    next-icon="mdi-menu-right"
    prev-icon="mdi-menu-left"
  ></v-pagination>

</template>

<script setup lang="ts">
let pageNum: Ref<number, number> = ref(1);

class Item {
  name: string;
  address: string;

  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }
}

let items: Array<Item> = [
  new Item('xxx', 'Real-Time'),
  new Item('mdi-account', 'Audience'),
  new Item('mdi-flag', 'Conversions'),
  new Item('mdi-clock', 'Real-Time'),
  new Item('mdi-account', 'Audience'),
  new Item('mdi-flag', 'Conversions'),
  new Item('mdi-clock', 'Real-Time'),
  new Item('yyy', 'Audience'),
  new Item('mdi-flag', 'Conversions'),
  new Item('mdi-clock', 'Real-Time'),
  new Item('mdi-account', 'Audience'),
  new Item('mdi-flag', 'Conversions'),
];

let length: number = items.length % 7 == 0 ? Math.trunc(items.length / 7) : Math.trunc(items.length / 7) + 1;
let itemsShown: Ref<Item[], Item[]> = ref([]);
watch(pageNum, (newValue, oldValue) => {
  itemsShown.value = items.slice((newValue - 1) * 7, items.length > newValue * 7 ? newValue * 7 : items.length);
}, {immediate: true})
</script>

<style scoped lang="scss">
.v-card {
  margin-top: 20px;
  width: 80% !important;
  height: 650px;
}

.title {
  margin-top: 10px;
  padding: 5px 10px;
  height: 80px;

  div {
    font-size: 28px;
  }
}

ul > li {
  padding: 5px;
  height: 80px;
  transition: background-color 0.1s;

  div {
    height: 100%;
    font-size: 20px;
    line-height: 70px;
  }
}

ul > li:hover {
  background-color: #f6f6f6;
}

.v-btn {
  padding: 10px;
  font-size: 20px;
}


:deep(.v-pagination__list>li) {
  margin: 10px 20px;
}

:deep(.v-btn--size-default) {
  font-size: 20px !important;
}

</style>
