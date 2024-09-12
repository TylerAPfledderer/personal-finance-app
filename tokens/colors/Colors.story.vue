<script setup lang="ts">
import ColorsBlock from "./ColorsBlock.vue";
import ColorBlockWrapper from "./ColorsBlockWrap.vue";
</script>
<template>
  <Story title="tokens / Colors">
    <div class="gap-8 flex flex-col">
      <div class="gap-4 flex flex-col">
        <h2 class="text-2xl font-bold">Beige</h2>
        <ColorBlockWrapper>
          <ColorsBlock bg-color-class="bg-beige-500" label="Beige 500" />
          <ColorsBlock bg-color-class="bg-beige-100" label="Beige 100" />
        </ColorBlockWrapper>
      </div>
      <div class="gap-4 flex flex-col">
        <h2 class="text-2xl font-bold">Grey</h2>
        <ColorBlockWrapper>
          <ColorsBlock bg-color-class="bg-grey-900" label="Grey 900" />
          <ColorsBlock bg-color-class="bg-grey-500" label="Grey 500" />
          <ColorsBlock bg-color-class="bg-grey-300" label="Grey 300" />
          <ColorsBlock bg-color-class="bg-grey-100" label="Grey 100" />
        </ColorBlockWrapper>
      </div>
      <div class="gap-4 flex flex-col">
        <h2 class="text-2xl font-bold">Secondary Colors</h2>
        <ColorBlockWrapper>
          <ColorsBlock bg-color-class="bg-green" label="Green" />
          <ColorsBlock bg-color-class="bg-yellow" label="Yellow" />
          <ColorsBlock bg-color-class="bg-cyan" label="Cyan" />
          <ColorsBlock bg-color-class="bg-navy" label="Navy" />
          <ColorsBlock bg-color-class="bg-red" label="Red" />
          <ColorsBlock bg-color-class="bg-purple" label="Purple" />
        </ColorBlockWrapper>
      </div>
      <div class="gap-4 flex flex-col">
        <h2 class="text-2xl font-bold">Other Colors</h2>
        <ColorBlockWrapper>
          <ColorsBlock bg-color-class="bg-pink" label="Pink" />
          <ColorsBlock bg-color-class="bg-turqoise" label="Turqoise" />
          <ColorsBlock bg-color-class="bg-brown" label="Brown" />
          <ColorsBlock bg-color-class="bg-magenta" label="Magenta" />
          <ColorsBlock bg-color-class="bg-blue" label="Blue" />
          <ColorsBlock bg-color-class="bg-navy-grey" label="Navy Grey" />
          <ColorsBlock bg-color-class="bg-army-green" label="Army Green" />
          <ColorsBlock bg-color-class="bg-gold" label="Gold" />
          <ColorsBlock bg-color-class="bg-orange" label="Orange" />
        </ColorBlockWrapper>
      </div>
      <div class="gap-4 flex flex-col">
        <h2 class="text-2xl font-bold">White</h2>
        <ColorBlockWrapper>
          <ColorsBlock bg-color-class="bg-white" label="White" />
        </ColorBlockWrapper>
      </div>
    </div>
  </Story>
</template>
