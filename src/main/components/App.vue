<script setup lang="ts">
import { ref } from 'vue'
import { makeCountUsecase, makeGetUsecase } from '../factories';

const count = ref(0)
const countUsecase = makeCountUsecase()
const getUsecase = makeGetUsecase()

function handleClick() {
  countUsecase.execute()
  count.value = getUsecase.execute()
}
</script>

<template>
  <div class="card">
    <button type="button" @click="handleClick">count is {{ count }}</button>
  </div>
</template>

