<script setup lang="ts">
const avatarImgList = [
  "aqua-flow-utilities.jpg",
  "buzz-marketing-group.jpg",
  "bytewise.jpg",
  "daniel-carter.jpg",
  "ecofuel-energy.jpg",
  "elevate-education.jpg",
  "ella-phillips.jpg",
  "emma-richardson.jpg",
  "ethan-clark.jpg",
  "flavor-fiesta.jpg",
  "green-plate-eatery.jpg",
  "harper-edwards.jpg",
  "james-thompson.jpg",
  "liam-hughes.jpg",
  "lily-ramirez.jpg",
  "mason-martinez.jpg",
  "nimbus-data-storage.jpg",
  "pixel-playground.jpg",
  "rina-sato.jpg",
  "savory-bites-bistro.jpg",
  "sebastian-cook.jpg",
  "serenity-spa-and-wellness.jpg",
  "sofia-peterson.jpg",
  "spark-electric-solutions.jpg",
  "sun-park.jpg",
  "swift-ride-share.jpg",
  "technova-innovations.jpg",
  "urban-services-hub.jpg",
  "william-harris.jpg",
  "yuna-kim.jpg",
];
</script>
<template>
  <Story title="ui / Avatar">
    <Variant title="md Size">
      <div class="grid grid-cols-4 gap-8">
        <UiAvatar
          v-for="img in avatarImgList"
          :key="img"
          :src="`/images/avatars/${img}`"
        />
      </div>
    </Variant>
    <Variant title="sm Size">
      <div class="grid grid-cols-4 gap-8">
        <UiAvatar
          v-for="img in avatarImgList"
          :key="img"
          :src="`/images/avatars/${img}`"
          size="sm"
        />
      </div>
    </Variant>
  </Story>
</template>
