<template>
  <q-page >
     <div class="q-pa-md" >
    <q-list separator bordered>
      <q-item v-for="entry in entries" :key="entry.id">
        <q-item-section
        :class="useAmountColor(entry.amount)"
        class="text-weight-bold"
        >
     {{entry.name}}
        </q-item-section>

        <q-item-section side :class="useAmountColor(entry.amount)"
        class="text-weight-bold">
         {{useCurrency(entry.amount)}}
        </q-item-section>
      </q-item>

    </q-list>
  </div>
  <q-footer>
   <div class="row q-pa-sm q-col-gutter-sm">
    <div class="col">
      <q-input dense bg-color="white"  outlined  placeholder="Name" />
    </div>
    <div class="col">
      <q-input input-class="text-right" type="number" step=0.01 dense bg-color="white" outlined  placeholder="Amount" />

    </div>
    <div class="col col-auto">
      <q-btn
      color="primary"
      icon="add"
      round
      >

      </q-btn>
    </div>
   </div>
  </q-footer>
  </q-page>
</template>

<script setup>

// imports

import { ref } from "vue";
import {useCurrency} from '../use/useCurrency'
import {useAmountColor} from '../use/useAmountColor'
// entries

const entries = ref([
  {
    id:'id0',
    name:'Salary',
    amount:4999.99
  },
  {
    id:'id1',
    name:'Rent',
    amount:-999
  },
  {
    id:'id2',
    name:'Phone',
    amount:-1499
  },
  {
    id:'id3',
    name:'Unknown',
    amount:0
  },
])

</script>
