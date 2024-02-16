Bun.serve({
    fetch: (request) => {
        return new Response('This thing is coming from Bun!')
    },
    port: process.env.PORT || 3000,
})