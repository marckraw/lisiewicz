module.exports = {
  name: "page",
  display_name: "Page",
  is_root: true,
  is_nestable: false,
  component_group_name: "Content type",
  schema: {
    body: {
      type: "bloks",
      pos: 0,
      restrict_components: false,
    },
    settings: {
      type: "tab",
      display_name: "Settings",
      keys: [],
    },
    seo_meta_fields: {
      type: "custom",
      field_type: "seo-metatags",
    },
    seo: {
      type: "tab",
      display_name: "SEO",
      keys: ["seo_meta_fields"],
    },
  },
};
