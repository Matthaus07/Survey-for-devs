import { SetStorageSpy } from '@/data/test/mock-storage'
import faker from 'faker'
import { LocalSaveAccessToken } from './local-save-access-token'
describe('LocalSaveAccessToken', () => {
  test('should call SetStorage with correct value', async () => {
    const storageSpy = new SetStorageSpy()
    const sut = new LocalSaveAccessToken(storageSpy)
    const accessToken = faker.random.uuid()
    await sut.save(accessToken)
    expect(storageSpy.key).toBe('accessToken')
    expect(storageSpy.value).toBe(accessToken)
  })
})
