import scrollTo from '../scrollTo';

describe('Test ScrollTo function', () => {
  let dateNowMock;

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  beforeEach(() => {
    dateNowMock = jest
      .spyOn(Date, 'now')
      .mockImplementationOnce(() => 0)
      .mockImplementationOnce(() => 1000);
  });

  afterEach(() => {
    dateNowMock.mockRestore();
  });

  it('test scrollTo', async () => {
    const scrollToSpy = jest.spyOn(window, 'scrollTo').mockImplementation((x, y) => {
      window.scrollY = y;
      window.pageYOffset = y;
    });

    scrollTo(1000);

    jest.runAllTimers();
    expect(window.pageYOffset).toBe(1000);

    scrollToSpy.mockRestore();
  });

  it('test callback - option', async () => {
    const scrollToSpy = jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
    const cbMock = jest.fn();

    scrollTo(1000, {
      callback: cbMock,
    });

    jest.runAllTimers();
    expect(cbMock).toHaveBeenCalledTimes(1);

    scrollToSpy.mockRestore();
  });

  it('test getContainer - option', async () => {
    const div = document.createElement('div');
    scrollTo(1000, {
      getContainer: () => div,
    });

    jest.runAllTimers();
    expect(div.scrollTop).toBe(1000);
  });

  it('test with custom duration', async () => {
    const scrollToSpy = jest.spyOn(window, 'scrollTo').mockImplementation((x, y) => {
      window.scrollY = y;
      window.pageYOffset = y;
    });

    scrollTo(1000, {
      duration: 200, // Custom shorter duration
    });

    jest.runAllTimers();
    expect(window.pageYOffset).toBe(1000);

    scrollToSpy.mockRestore();
  });

  it('test with zero duration', async () => {
    const scrollToSpy = jest.spyOn(window, 'scrollTo').mockImplementation((x, y) => {
      window.scrollY = y;
      window.pageYOffset = y;
    });

    scrollTo(1000, {
      duration: 0,
    });

    jest.runAllTimers();
    expect(window.pageYOffset).toBe(1000);

    scrollToSpy.mockRestore();
  });

  it('test with negative scroll position', async () => {
    const scrollToSpy = jest.spyOn(window, 'scrollTo').mockImplementation((x, y) => {
      window.scrollY = y;
      window.pageYOffset = y;
    });

    scrollTo(-100);

    jest.runAllTimers();
    expect(window.pageYOffset).toBe(-100);

    scrollToSpy.mockRestore();
  });

  it('test with null callback', async () => {
    const scrollToSpy = jest.spyOn(window, 'scrollTo').mockImplementation((x, y) => {
      window.scrollY = y;
      window.pageYOffset = y;
    });

    scrollTo(1000, {
      callback: null,
    });

    jest.runAllTimers();
    expect(window.pageYOffset).toBe(1000);

    scrollToSpy.mockRestore();
  });

  it('test with same position as current', async () => {
    const scrollToSpy = jest.spyOn(window, 'scrollTo').mockImplementation((x, y) => {
      window.scrollY = y;
      window.pageYOffset = y;
    });

    // Set initial scroll position
    window.scrollY = 500;
    window.pageYOffset = 500;

    const cbMock = jest.fn();
    scrollTo(500, {
      callback: cbMock,
    });

    jest.runAllTimers();
    // Callback should still be called even if position doesn't change
    expect(cbMock).toHaveBeenCalledTimes(1);
    expect(window.pageYOffset).toBe(500);

    scrollToSpy.mockRestore();
  });
});
