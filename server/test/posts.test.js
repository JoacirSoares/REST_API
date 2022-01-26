const axios = require('axios');

jest.useRealTimers()

test('Should get post', async function() {
    const response = await axios({
        url: 'http://localhost:3000/posts',
        method: 'get'
    });
    const posts = response.data;
    expect(posts).toHaveLength(3);
});