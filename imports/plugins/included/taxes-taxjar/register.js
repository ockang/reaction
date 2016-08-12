import { Reaction } from "/server/api";

Reaction.registerPackage({
  label: "Taxes",
  name: "taxes-taxjar",
  icon: "fa fa-university",
  autoEnable: true,
  settings: {
    taxjar: {
      enabled: false,
      apiLoginId: ""
    }
  },
  registry: [
    {
      label: "TaxJar",
      name: "taxes/settings/taxjar",
      provides: "taxSettings",
      template: "taxJarSettings"
    },
    {
      template: "taxJarCheckoutTaxes",
      provides: "taxMethod"
    }
  ]
});
