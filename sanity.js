import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: 'vxrhqr5m',
  dataset: 'production',
  apiVersion: '2023-01-01', // use current UTC date - see "specifying API version"!
  useCdn: true, // `false` if you want to ensure fresh data
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client