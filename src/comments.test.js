import Counter from './__Mocks__/countMock.js';
import comments from './__Mocks__/commentsMock.js';

describe('checkout the count of the comments', () => {
  test('test if the comment return the correct data', () => {
    const data = comments;
    const count = Counter(data);
    expect(count).toEqual(3);
    expect(count).toEqual(data.length);
    expect(count - data.length).toEqual(0);
    expect(count - 3).toEqual(0);
    expect(typeof data).toEqual('object');
    expect(typeof count).toEqual('number');
  });
});
