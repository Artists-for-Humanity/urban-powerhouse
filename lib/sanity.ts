import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'kyxled15',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-01-01',
})