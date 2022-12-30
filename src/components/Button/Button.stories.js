import Button from "./Button.vue";

export default {
  component: Button,
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  label: "Count",
  initialValue: 0,
};
