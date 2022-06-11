jest.mock('../src/services/dom.service');
jest.mock('../src/services/background.service');
jest.mock('../src/services/dom.service');
jest.mock('../src/services/storage.service');


afterEach(() => {
    jest.restoreAllMocks()
});
