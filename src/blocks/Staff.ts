import { Block } from 'payload'

export const StaffBlock: Block = {
  slug: 'staff-block',
  labels: {
    singular: 'Staff',
    plural: 'Staff',
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
      name: 'staff',
      type: 'relationship',
      relationTo: 'staff',
      hasMany: true,
      required: true,
      admin: {
        description: 'Personal del negocio',
      },
    },
  ],
}
