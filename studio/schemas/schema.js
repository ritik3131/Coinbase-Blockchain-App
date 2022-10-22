// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      title: "Coins",
      name: "coin",
      type: "document",
      fields: [
        {
          name: "name",
          title: "Name",
          type: "string",
        },
        {
          name: "symbol",
          title: "Symbol",
          type: "string",
        },
        {
          name: "contractaddress",
          title: "Contract Address",
          type: "string",
        },
        {
          name: "usdprice",
          title: "USD Price",
          type: "string",
        },
        {
          name: "logo",
          title: "Logo",
          type: "image",
        },
      ],
    },
  ]),
});
