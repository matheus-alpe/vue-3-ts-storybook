import Input from "./Input.vue";

export default {
  component: Input,
  argTypes: {
    type: {
      control: "select",
      options: ["text", "number", "date"],
    },
  },
};

const Template = (args) => ({
  components: { Input },
  setup() {
    return { args };
  },
  template: '<Input v-bind="args" />',
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});
