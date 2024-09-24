import { CollectionConfig } from 'payload/types'

const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    // defaultColumns: ['title', 'slug', 'updatedAt'],
    // preview: (doc) => {
    //   return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/next/preview?url=${encodeURIComponent(
    //     `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/projects/${doc?.slug}`
    //   )}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`
    // },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subTitle',
      type: 'text',
    },
    {
      name: 'shortDescription',
      type: 'richText',
    },
    {
      name: 'longDescription',
      type: 'richText',
    },
    {
      name: 'projectDate',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'projectLink',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'repoLink',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}

export default Projects
