export default {
  widgets: [
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
                  buildHookId: '60594c26f099b90081cd9ad9',
                  title: 'Sanity Studio',
                  name: 'xyzcuongcua-studio',
                  apiId: '18572d65-4b89-4b00-bd67-1ffadd16a2ab'
                },
                {
                  buildHookId: '60594c261700501588cd8ebf',
                  title: 'Blog Website',
                  name: 'xyzcuongcua',
                  apiId: 'eab7669d-dbeb-4e4a-b34d-718d07c850cc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magiclisten/xyzcuongcua',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://xyzcuongcua.netlify.app', category: 'apps'}
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
