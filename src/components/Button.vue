<template>
  <button
    class="
      font-clashdisplay font-normal
      text-sm
      border-[1px] border-white
      py-2
      px-4
      leading-[17px]
      rounded-[48px]
    "
    :class="[
      invert
        ? 'text-black bg-white'
        : 'text-white hover:text-black hover:bg-white duration-300 ',
      epilogue ? 'font-epilogue' : 'font-clashdisplay',
    ]"
  >
    {{ text }}
  </button>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: "Bouton",
    },
    invert: {
      type: Boolean,
      default: false,
    },
    epilogue: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="postcss">
button {
  width: fit-content;
}
</style>