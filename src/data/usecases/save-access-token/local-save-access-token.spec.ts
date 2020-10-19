import faker from 'faker'
import { SetStorageMock } from '@/data/test/mock-storage'
import { LocalSaveAccessToken } from './local-save-access-token'

interface SutTypes{
  sut: LocalSaveAccessToken
  setStorageMock: SetStorageMock
}

const makeSut = (): SutTypes => {
  const setStorageSpy = new SetStorageMock()
  const sut = new LocalSaveAccessToken(setStorageSpy)
  return { sut,setStorageMock: setStorageSpy }
}
describe('LocalSaveAccessToken', () => {
  test('should call SetStorage with correct value', async () => {
    const { sut, setStorageMock: setStorageSpy } = makeSut()
    const accessToken = faker.random.uuid()
    await sut.save(accessToken)
    expect(setStorageSpy.key).toBe('accessToken')
    expect(setStorageSpy.value).toBe(accessToken)
  })

  test('should throw if setStorage throws', async () => {
    const { sut, setStorageMock } = makeSut()
    jest.spyOn(setStorageMock,'set').mockRejectedValueOnce(new Error())
    const promise = sut.save(faker.random.uuid())
    await expect(promise).rejects.toThrow(new Error())
  })
})
