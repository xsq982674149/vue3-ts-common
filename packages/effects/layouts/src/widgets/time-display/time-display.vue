<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';

import { Clock } from '@vben/icons';
import { getCurrentLocalTime, getTimezoneOffset } from '@vben/utils';

defineOptions({
  name: 'TimeDisplay',
});

const currentDateTime = ref('');
const timezoneOffset = ref('');
let timer: ReturnType<typeof setInterval> | null = null;

function updateTime() {
  // 直接使用dayjs获取UTC时间并转换为用户时区时间
  currentDateTime.value = getCurrentLocalTime('YYYY-MM-DD HH:mm:ss');
  timezoneOffset.value = getTimezoneOffset();
}

onMounted(() => {
  updateTime();
  timer = setInterval(updateTime, 1000);
});

onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
});
</script>

<template>
  <div
    class="text-foreground flex cursor-default items-center gap-1.5 rounded-md px-2 py-1 text-sm"
  >
    <Clock class="size-4" />
    <span class="font-mono"
      >{{ currentDateTime }} ({{ timezoneOffset }})</span
    >
  </div>
</template>
