declare module '*.yaml' {
  const content: {
    english: {
      header: {
        name: string
        role: string
      }
      experience: {
        title: string
        companies: Array<{
          name: string
          description: string
        }>
        linkedin_cta: string
      }
      projects: {
        title: string
        items: Array<{
          name: string
          description: string
        }>
        github_cta: string
      }
      about: {
        title: string
        coding_with: string
        working_at: string
        company: string
        location_label: string
        location: string
      }
    }
  }
  export default content
} 