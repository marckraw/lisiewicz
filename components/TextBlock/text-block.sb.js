module.exports = {
  name: "text-block",
  display_name: "Text block",
  is_root: false,
  is_nestable: true,
  component_group_name: "Typography",
  schema: {
    title: {
      type: "text",
    },
    content: {
      type: "text",
    },
    settings: {
      type: "tab",
      display_name: "Settings",
      keys: [],
    },
  },
};
