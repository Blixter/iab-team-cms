import {defineConfig, isDev} from 'sanity'

import {deskTool} from 'sanity/desk'
import {schemaTypes, shopSchemaTypes} from './schemas'
import {shopStructure, structure} from './desk'

import {visionTool} from '@sanity/vision'
import {colorInput} from '@sanity/color-input'
import {imageHotspotArrayPlugin} from 'sanity-plugin-hotspot-array'
import {media, mediaAssetSource} from 'sanity-plugin-media'
import {customDocumentActions} from './plugins/customDocumentActions'

const devOnlyPlugins = [visionTool()]

export default defineConfig([
  {
    name: 'default',
    title: 'Default',

    projectId: 't5ebf1k4',
    dataset: 'production',
    basePath: '/default',
    plugins: [
      deskTool({structure}),
      colorInput(),
      imageHotspotArrayPlugin(),
      customDocumentActions(),
      media(),
      ...(isDev ? devOnlyPlugins : []),
    ],

    schema: {
      types: schemaTypes,
    },

    form: {
      file: {
        assetSources: (previousAssetSources) => {
          return previousAssetSources.filter((assetSource) => assetSource !== mediaAssetSource)
        },
      },
      image: {
        assetSources: (previousAssetSources) => {
          return previousAssetSources.filter((assetSource) => assetSource === mediaAssetSource)
        },
      },
    },
  },
  {
    name: 'shop',
    title: 'Shop',
    projectId: 't5ebf1k4',
    dataset: 'production',
    basePath: '/shop',
    plugins: [
      deskTool({shopStructure}),
      // imageHotspotArrayPlugin(),
      // customDocumentActions(),
      // media(),
      // ...(isDev ? devOnlyPlugins : []),
    ],

    schema: {
      types: shopSchemaTypes,
    },

    form: {
      file: {
        assetSources: (previousAssetSources) => {
          return previousAssetSources.filter((assetSource) => assetSource !== mediaAssetSource)
        },
      },
      image: {
        assetSources: (previousAssetSources) => {
          return previousAssetSources.filter((assetSource) => assetSource === mediaAssetSource)
        },
      },
    },
  },
])
