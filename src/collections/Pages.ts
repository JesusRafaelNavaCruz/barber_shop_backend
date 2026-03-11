import type { CollectionConfig } from 'payload'
import { Hero } from '../blocks/Hero'
import { Text } from '../blocks/Text'
import { ServicesBlock } from '../blocks/Services'
import { ReviewsBlock } from '../blocks/Reviews'
import { CTA } from '../blocks/CTA'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'createdAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'Enter page title',
      },
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      index: true,
      required: true,
      admin: {
        placeholder: 'page-slug',
        description: 'URL-friendly identifier for the page',
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [Hero, Text, ServicesBlock, ReviewsBlock, CTA],
      required: true,
      admin: {
        description: 'Add and arrange blocks to build your page layout',
      },
    },
  ],
  timestamps: true,
}
