import type { Block } from 'payload'

export const ServicesBlock: Block = {
  slug: 'service-block',
  labels: {
    singular: 'Services Block',
    plural: 'Services Blocks',
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
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
      required: true,
      admin: {
        description: 'Seleccione los servicios que apareceran en la sección',
      },
    },
  ],
}
