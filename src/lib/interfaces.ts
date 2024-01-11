export interface PostInterface {
  frontmatter: any
  Content: any
}

export interface PostFrontmatterInterface {
  title: string
  date: string
  description: string
  keywords: string
  rating: number | string
  location: string[]
  images: ImageFrontmatterInterface[]
}

export interface ImageFrontmatterInterface {
  src: string
  alt: string
}
