import { Block } from 'payload'

export const GalleryBlock: Block = {
  slug: 'gallery-block',
  labels: {
    singular: 'gallery',
    plural: 'galleries',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'Ingrese el titulo de la sección',
      },
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'Ingrese el subtitulo de la sección',
      },
    },
    {
      name: 'gallery',
      type: 'relationship',
      relationTo: 'gallery',
      hasMany: true,
      required: true,
      admin: {
        description: 'Imagenes de galeria',
      },
    },
  ],
}
