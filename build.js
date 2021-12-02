const Eleventy = require('@11ty/eleventy');

async function build() {
  const eleventy = new Eleventy();

  await eleventy.init('.', './_site');

  const result = await eleventy.toJSON();

  console.log(result);
}

build();
