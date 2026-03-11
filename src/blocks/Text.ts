import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Text: Block = {
  slug: 'text',
  labels: {
    singular: 'Text',
    plural: 'Text Blocks',
  },
  fields: [
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor(),
      required: true,
      admin: {
        description: 'Add rich text content',
      },
    },
  ],
}
