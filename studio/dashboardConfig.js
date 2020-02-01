export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5e3506b1eda9b194f5a2f0d5',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-kbbxdifa',
                  apiId: 'dbc4d209-6003-4ebe-a70b-c1f23a7926db'
                },
                {
                  buildHookId: '5e3506b1d1494468281f0e19',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-2hpwcj21',
                  apiId: '33312d81-1d49-4708-ac95-264cf00e0c4a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BrooksL/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-2hpwcj21.netlify.com', category: 'apps'}
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
