export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5db0a5d089b73d845dec5e13',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-test-blog-studio',
                  apiId: 'd0dac363-6e3a-4749-969f-1b7209c18448'
                },
                {
                  buildHookId: '5db0a5d0cbc9d25b63fe4593',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-test-blog',
                  apiId: '40c67e4a-cced-4bbd-9e30-b89a39629adb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/void-cmd/sanity-gatsby-test-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-test-blog.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
