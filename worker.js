export const api = {
  icon: '👌',
  name: 'pkg.do',
  description: 'Simple Package Manager CDN',
  url: 'https://pkg.do/api',
  type: 'https://apis.do/code',
  endpoints: {
    buildFile: 'https://pkg.do/:package',
  },
  site: 'https://pkg.do',
  login: 'https://pkg.do/login',
  signup: 'https://pkg.do/signup',
  subscribe: 'https://pkg.do/subscribe',
  repo: 'https://github.com/drivly/pkg.do',
}

export default {
  fetch: async (req, env) => {
    const { pathname, search } = new URL(req.url)
    if (pathname != '/api') return fetch('https://cdn.skypack.dev/' + pathname + search)
     const { user, origin, requestId, method, body, time, pathSegments, pathOptions, url, query } = await env.CTX.fetch(req).then(res => res.json())
     return new Response(JSON.stringify({api,user}, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
    }
  }
}
