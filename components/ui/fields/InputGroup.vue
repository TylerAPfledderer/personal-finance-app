<script lang="ts">
import { cloneVNode, h, isVNode } from "vue";

export default {
  setup(props, { slots }) {
    const validEls = slots
      .default?.()
      .filter((el) => isVNode(el))
      .map((el) => {
        return cloneVNode(el, { "aria-label": "This is cloned" });
      });

    return () => h("div", validEls);
  },
};
</script>
